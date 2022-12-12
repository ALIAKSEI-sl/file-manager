const user = process.argv[2];
const userName = user.replace('--username=', '');

export const sayHello = () => {
  if (user && user.startsWith('--username=')) {
    console.log(`Welcome to the File Manager, ${userName}!`);
  } else {
    console.log(`You need to pass the parameter in the format '-- --username=your_username'`);
    process.exit();
  }
};

export const finishingWork = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
}