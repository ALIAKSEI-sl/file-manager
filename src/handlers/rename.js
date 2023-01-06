import { dirname, resolve } from 'path';
import { rename as createNewName } from 'fs/promises';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const rename = async (path, newPath) => {
  if (path && newPath) {
    if (newPath.includes('/') || newPath.includes('\\') || newPath.includes(':') || newPath.includes('*') || newPath.includes('?') || newPath.includes('<') || newPath.includes('>') || newPath.includes('|') || newPath.includes('"')) {
      console.log('Operation failed');
      return
    }
    const srcWrongFile = resolve(path);
    const srcProperFile = resolve(dirname(srcWrongFile), newPath);
    try {
      await createNewName(srcWrongFile, srcProperFile);
      getWorkingDirectory();
    } catch (error) {
      console.log('Operation failed');
    }
  } else {
    console.log('Invalid input');
  }
}