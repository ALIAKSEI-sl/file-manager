import { readdir } from 'fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const list = async (path) => {
  if (path) {
    console.log('Invalid input');
  } else {
    try {
      const dirFiles = await readdir(process.cwd(), { withFileTypes: true });
      const arrayFolders = dirFiles.filter(d => d.isDirectory()).map(({name}) => {
        return {name, type: 'directory'};
      }).sort((e) => e.name);
      const arrayFiles = dirFiles.filter(d => !d.isDirectory()).map(({name}) => {
        return {name, type: 'file'};
      }).sort((e) => e.name);
      const arrayDir = arrayFolders.concat(arrayFiles);
      console.table(arrayDir);
      getWorkingDirectory();
    } catch(error) {
      console.log('Invalid input');
    }
  }
}