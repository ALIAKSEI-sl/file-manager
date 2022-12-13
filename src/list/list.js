import { readdir } from 'node:fs/promises';

export const getListOfFiles = async (path) => {
  const dirFiles = await readdir(path, { withFileTypes: true });
  const arrayFolders = dirFiles.filter(d => d.isDirectory()).map(d => `${d.name} directory`).sort();
  const arrayFiles = dirFiles.filter(d => !d.isDirectory()).map(d => `${d.name} file`).sort();
  const arrayDir = arrayFolders.concat(arrayFiles).map((e, i) => `${i} ${e}`)
  return arrayDir.join('\n');
}