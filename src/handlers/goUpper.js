import { access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';

export const goUpper = (path) => {
  return dirname(path)
};

export const GoToFolder = async (folderName, path) => {
  try {
    await access(resolve(folderName));
    return resolve(folderName);
  } catch (error) {
    try {
      await access(join(path, folderName));
      return join(path, folderName)
    } catch {
      console.log('A non-existent path');
      return path
    }
  }
}

