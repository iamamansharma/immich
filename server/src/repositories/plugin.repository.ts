import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PluginEntity } from 'src/entities/plugin.entity';
import { IPluginRepository, PluginLike, PluginSearchOptions } from 'src/interfaces/plugin.interface';
import { Repository } from 'typeorm';

@Injectable()
export class PluginRepository implements IPluginRepository {
  constructor(@InjectRepository(PluginEntity) private repository: Repository<PluginEntity>) {}

  search(options: PluginSearchOptions): Promise<PluginEntity[]> {
    return this.repository.find({
      where: {
        id: options.id,
        namespace: options.namespace,
        version: options.version,
        name: options.name,
        isEnabled: options.isEnabled,
        isInstalled: options.isInstalled,
        isOfficial: options.isOfficial,
      },
    });
  }

  create(dto: Partial<PluginEntity>): Promise<PluginEntity> {
    return this.repository.save(dto);
  }

  get(id: string): Promise<PluginEntity | null> {
    return this.repository.findOne({ where: { id } });
  }

  update(dto: Partial<PluginEntity>): Promise<PluginEntity> {
    return this.repository.save(dto);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  download(url: string, downloadPath: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  load(pluginPath: string): Promise<PluginLike> {
    return import(pluginPath);
  }
}
