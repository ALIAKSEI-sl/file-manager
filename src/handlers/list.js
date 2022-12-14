import { readdir } from 'node:fs/promises';

export const list = async (path) => {
  if (path) {
    console.log('Invalid input');
  } else {
    const dirFiles = await readdir(process.cwd(), { withFileTypes: true });
    const arrayFolders = dirFiles.filter(d => d.isDirectory()).map(d => `${d.name} directory`).sort();
    const arrayFiles = dirFiles.filter(d => !d.isDirectory()).map(d => `${d.name} file`).sort();
    const arrayDir = arrayFolders.concat(arrayFiles).map((e, i) => `${i} ${e}`)
    console.log(arrayDir.join('\n'));
  }
}