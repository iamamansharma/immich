import { PluginEntity } from 'src/entities/plugin.entity';

export const IPluginRepository = 'IPluginRepository';

export interface PluginSearchOptions {
  id?: string;
  namespace?: string;
  version?: number;
  name?: string;
  isEnabled?: boolean;
  isInstalled?: boolean;
  isOfficial?: boolean;
}

export interface IPluginRepository {
  search(options: PluginSearchOptions): Promise<PluginEntity[]>;
  create(dto: Partial<PluginEntity>): Promise<PluginEntity>;
  get(id: string): Promise<PluginEntity | null>;
  update(dto: Partial<PluginEntity>): Promise<PluginEntity>;
  delete(id: string): Promise<void>;

  download(url: string, downloadPath: string): Promise<void>;
  load(pluginPath: string): Promise<PluginLike>;
}

export type PluginFactory = {
  register: () => MaybePromise<Plugin>;
};

export type PluginLike = Plugin | { default: Plugin } | { plugin: Plugin } | { register: () => Promise<Plugin> };

export interface Plugin<T extends PluginConfig | undefined = undefined> {
  version: 1;
  id: string;
  name: string;
  description: string;
  actions: PluginAction<T>[];
}

export type PluginAction<T extends PluginConfig | undefined = undefined> = {
  id: string;
  name: string;
  description: string;
  events?: EventType[];
  config?: T;
  onAction: OnAction<T>;
};

export type OnAction<T extends PluginConfig | undefined, D = PluginActionData> = T extends undefined
  ? (ctx: PluginContext, data: D) => MaybePromise<void>
  : (ctx: PluginContext, data: D, config: InferConfig<T>) => MaybePromise<void>;

export type PluginActionData = { data: { asset?: AssetDto; album?: AlbumDto } } & (
  | { type: EventType.ASSET_UPLOAD; data: { asset: AssetDto } }
  | { type: EventType.ASSET_UPDATE; data: { asset: AssetDto } }
  | { type: EventType.ASSET_TRASH; data: { asset: AssetDto } }
  | { type: EventType.ASSET_DELETE; data: { asset: AssetDto } }
  | { type: EventType.ALBUM_CREATE; data: { album: AlbumDto } }
  | { type: EventType.ALBUM_UPDATE; data: { album: AlbumDto } }
);

export type PluginConfig = Record<string, ConfigItem>;

export interface PluginContext {
  updateAsset: (asset: { id: string; isArchived: boolean }) => Promise<void>;
}

export type ConfigItem = {
  name: string;
  description: string;
  required?: boolean;
} & { [K in Types]: { type: K; default?: InferType<K> } }[Types];

export type InferType<T extends Types> = T extends 'string'
  ? string
  : T extends 'date'
    ? Date
    : T extends 'number'
      ? number
      : T extends 'boolean'
        ? boolean
        : never;

type Types = 'string' | 'boolean' | 'number' | 'date';
type MaybePromise<T = void> = Promise<T> | T;
type IfRequired<T extends ConfigItem, Type> = T['required'] extends true ? Type : Type | undefined;
type InferConfig<T> = T extends PluginConfig
  ? {
      [K in keyof T]: IfRequired<T[K], InferType<T[K]['type']>>;
    }
  : never;

export enum EventType {
  ASSET_UPLOAD = 'asset.upload',
  ASSET_UPDATE = 'asset.update',
  ASSET_TRASH = 'asset.trash',
  ASSET_DELETE = 'asset.delete',
  ASSET_ARCHIVE = 'asset.archvie',
  ASSET_UNARCHIVE = 'asset.unarchive',

  ALBUM_CREATE = 'album.create',
  ALBUM_UPDATE = 'album.update',
  ALBUM_DELETE = 'album.delete',
}

export type AssetDto = any;
export type AlbumDto = any;
