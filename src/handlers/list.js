import { resolve } from 'path';
import { readdir } from 'fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';
import { isDirectory } from '../helpers/is.js';

export const list = async (path) => {
  if (path) {
    console.log('Invalid input');
  } else {
    try {
      const dirFiles = await readdir(process.cwd());
      const arrayIsDirectory = await Promise.all(dirFiles.map(name => {
        return isDirectory(resolve(process.cwd(), name))
      }));

      const arrayFolders = arrayIsDirectory.reduce((ac, boolean, index) => {
        if (boolean) {
          ac.push({ name: dirFiles[index], type: 'directory' })
        }
        return ac;
      }, []).sort(({ name }) => name);

      const arrayFiles = arrayIsDirectory.reduce((ac, boolean, index) => {
        if (!boolean) {
          ac.push({ name: dirFiles[index], type: 'file' })
        }
        return ac;
      }, []).sort(({ name }) => name);

      const arrayDir = arrayFolders.concat(arrayFiles);
      console.table(arrayDir);
      getWorkingDirectory();
    } catch (error) {
      console.log('Invalid input');
    }
  }
}