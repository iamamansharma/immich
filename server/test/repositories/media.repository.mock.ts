import { IMediaRepository } from 'src/interfaces/media.interface';

export const newMediaRepositoryMock = (): jest.Mocked<IMediaRepository> => {
  return {
    generateThumbhash: jest.fn(),
    extract: jest.fn().mockResolvedValue(null),
    resize: jest.fn(),
    crop: jest.fn(),
    probe: jest.fn(),
    transcode: jest.fn(),
  };
};
