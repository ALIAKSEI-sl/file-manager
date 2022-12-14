import { access } from 'node:fs/promises';
import { createReadStream } from 'node:fs';

export const readingFile = async (fileName, path) => {
  try {
    await access(fileName);
    const readStream = createReadStream(fileName, { encoding: 'utf8' });
    readStream.pipe(process.stdout);
    return resolve(fileName);
  } catch (error) {
    try {
      await access(join(path, fileName));
      const readStream = createReadStream(join(path, fileName), { encoding: 'utf8' });
      readStream.pipe(process.stdout);
      return join(path, fileName)
    } catch {
      console.log('A non-existent path');
      return path
    }
  }
}

