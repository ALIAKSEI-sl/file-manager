import { chdir } from 'process';
import { homedir } from 'os';
import { startOfWork, endOfWork, getWorkingDirectory } from './helpers/console-output.js';
import { eventListener } from './start/listener.js';

chdir(homedir());
startOfWork();
getWorkingDirectory();

process.stdin.on('data', eventListener);

process.on('SIGINT', () => {
  endOfWork();
})