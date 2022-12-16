import { endOfWork } from './console-output.js';
import { up, cd } from '../handlers/navigation.js';
import { list } from '../handlers/list.js';
import { read } from '../handlers/read.js';
import { create } from '../handlers/create.js';
import { rename } from '../handlers/rename.js';
import { copy } from '../handlers/copy.js';
import { move } from '../handlers/move.js';
import { remove } from '../handlers/remove.js';
import { os } from '../handlers/os.js';
import { hash } from '../handlers/hash.js';
import { compress, decompress } from '../handlers/archiving.js';

export const eventListener = async (data) => {
  const [command, path, newPath] = data.toString().trim().split(' ');

  switch (command) {
    case 'up': up(path)
      break
    case 'cd': cd(path)
      break
    case 'ls': await list(path)
      break
    case 'cat': await read(path)
      break
    case 'add': await create(path)
      break
    case 'rn': await rename(path, newPath)
      break
    case 'cp': await copy(path, newPath)
      break
    case 'mv': await move(path, newPath)
      break
    case 'rm': await remove(path)
      break
    case 'os': os(path)
      break
    case 'hash': await hash(path)
      break
    case 'compress': await compress(path, newPath)
      break
    case 'decompress': await decompress(path, newPath)
      break
    case '.exit': path ? console.log('Invalid input') : endOfWork()
      break

    default: console.log('Invalid input')
      break
  }
}