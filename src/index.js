import { sayHello, finishingWork } from './greeting/greeting.js';
import {homedir} from 'node:os'

sayHello();
console.log(homedir());

process.stdin.on('data', (data) => {
  if (data.toString().trim() === '.exit') {
    finishingWork();
  }
})

process.on('SIGINT', () => {
  finishingWork();
})