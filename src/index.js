import {homedir} from 'node:os';
import { sayHello, finishingWork } from './greeting/greeting.js';
import { goUpper, GoToFolder } from './navigation/goUpper.js';
import { getListOfFiles } from './list/list.js';
import { readingFile } from './operationsWithFiles/read.js'

let pathDirectory = homedir();
sayHello();
console.log(`You are currently in ${homedir()}`);

process.stdin.on('data', async (data) => {
  const operation = data.toString().trim();
  if (operation === '.exit') {
    finishingWork();
  }
  else if (operation === 'up') {
    pathDirectory = goUpper(pathDirectory);
    console.log(pathDirectory)
  }

  else if (operation.startsWith('cd')) {
    pathDirectory = await GoToFolder(operation.replace('cd ', ''), pathDirectory);
    console.log(pathDirectory)
  }

  else if (operation === 'ls') {
    const listOfFile = await getListOfFiles(pathDirectory)
    console.log(listOfFile)
  }

  else if (operation.startsWith('cat')) {
    pathDirectory = await readingFile(operation.replace('cat ', ''), pathDirectory)
    console.log(pathDirectory)
  }

})

process.on('SIGINT', () => {
  finishingWork();
})