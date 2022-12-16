import { EOL, cpus, userInfo, arch } from 'os';
import { getWorkingDirectory } from '../helpers/console-output.js';

export const os = (arg) => {
  if (arg) {
    switch (arg) {
      case '--EOL': console.log(JSON.stringify(EOL))
        getWorkingDirectory();
        break
      case '--cpus': {
        const arrayCpus = cpus().map(({ model, speed }) => {
          return { model, frequency: `${(speed / 1000).toFixed(1)} GHz` };
        });
        console.table(arrayCpus);
        getWorkingDirectory();
      }
        break
      case '--homedir': console.log(userInfo().homedir)
        getWorkingDirectory();
        break
      case '--username': console.log(userInfo().username)
        getWorkingDirectory();
        break
      case '--architecture': console.log(arch())
        getWorkingDirectory();
        break
      default:
        console.log('Invalid input');
        break
    }
  } else {
    console.log('Invalid input');
  }
}