import { dirname, join } from 'node:path';

export const goUpper = (path) => {
  return dirname(path)
};

export const GoToFolder = (path, folderName) => {
  return join(path, folderName)
}

export const getListOfFiles = async (path) => {
  const dirFiles = await readdir(path)
  return dirFiles;
}