import { AssetStackEntity } from 'src/entities/asset-stack.entity';
import { AssetEntity, AssetType } from 'src/entities/asset.entity';
import { ExifEntity } from 'src/entities/exif.entity';
import { authStub } from 'test/fixtures/auth.stub';
import { fileStub } from 'test/fixtures/file.stub';
import { libraryStub } from 'test/fixtures/library.stub';
import { userStub } from 'test/fixtures/user.stub';

export const assetStackStub = (stackId: string, assets: AssetEntity[]): AssetStackEntity => {
  return {
    id: stackId,
    assets: assets,
    primaryAsset: assets[0],
    primaryAssetId: assets[0].id,
  };
};

export const assetStub = {
  noResizePath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'IMG_123.jpg',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_123.jpg',
    previewPath: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    deletedAt: null,
    isOffline: false,
    isExternal: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
  }),

  noWebpPath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_456.jpg',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: null,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'IMG_456.jpg',
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    isOffline: false,
    isExternal: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 123_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  noThumbhash: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    deletedAt: null,
  }),

  primaryImage: Object.freeze<AssetEntity>({
    id: 'primary-asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.admin,
    ownerId: 'admin-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    previewPath: '/uploads/admin-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/admin-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    stack: assetStackStub('stack-1', [
      { id: 'primary-asset-id' } as AssetEntity,
      { id: 'stack-child-asset-1' } as AssetEntity,
      { id: 'stack-child-asset-2' } as AssetEntity,
    ]),
  }),

  image: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
  }),

  external: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
  }),

  offline: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: true,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    deletedAt: null,
  }),

  image1: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    deletedAt: null,
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    isExternal: false,
    isOffline: false,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
  }),

  imageFrom2015: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2015-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2015-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2015-02-23T05:06:29.716Z'),
    updatedAt: new Date('2015-02-23T05:06:29.716Z'),
    localDateTime: new Date('2015-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isExternal: false,
    isReadOnly: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
    deletedAt: null,
  }),

  video: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    thumbnailPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    deletedAt: null,
  }),

  livePhotoMotionAsset: Object.freeze({
    id: fileStub.livePhotoMotion.uuid,
    originalPath: fileStub.livePhotoMotion.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.VIDEO,
    isVisible: false,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 100_000,
    },
  } as AssetEntity),

  livePhotoStillAsset: Object.freeze({
    id: 'live-photo-still-asset',
    originalPath: fileStub.livePhotoStill.originalPath,
    ownerId: authStub.user1.user.id,
    type: AssetType.IMAGE,
    livePhotoVideoId: 'live-photo-motion-asset',
    isVisible: true,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    exifInfo: {
      fileSizeInByte: 25_000,
    },
  } as AssetEntity),

  withLocation: Object.freeze<AssetEntity>({
    id: 'asset-with-favorite-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-22T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-22T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    checksum: Buffer.from('file hash', 'utf8'),
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    sidecarPath: null,
    type: AssetType.IMAGE,
    thumbnailPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-22T05:06:29.716Z'),
    updatedAt: new Date('2023-02-22T05:06:29.716Z'),
    localDateTime: new Date('2023-02-22T05:06:29.716Z'),
    isFavorite: false,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    exifInfo: {
      latitude: 100,
      longitude: 100,
      fileSizeInByte: 23_456,
      city: 'test-city',
      state: 'test-state',
      country: 'test-country',
    } as ExifEntity,
    deletedAt: null,
  }),
  sidecar: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    deletedAt: null,
  }),
  sidecarWithoutExt: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.xmp',
    deletedAt: null,
  }),

  readOnly: Object.freeze<AssetEntity>({
    id: 'read-only-asset',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: true,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    deletedAt: null,
  }),

  hasEncodedVideo: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    previewPath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    thumbnailPath: null,
    thumbhash: null,
    encodedVideoPath: '/encoded/video/path.mp4',
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    deletedAt: null,
  }),
  missingFileExtension: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'photo',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
  }),
  hasFileExtension: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/data/user1/photo.jpg',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    isExternal: true,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.externalLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'photo.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
    } as ExifEntity,
  }),
  imageDng: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.dng',
    previewPath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    thumbnailPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    localDateTime: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    isExternal: false,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryStub.uploadLibrary1,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    deletedAt: null,
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5000,
      profileDescription: 'Adobe RGB',
      bitsPerSample: 14,
    } as ExifEntity,
  }),
};
