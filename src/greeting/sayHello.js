const user = process.argv[2];

export const sayHello = () => {
  if (user && user.startsWith('--username=')) {
    const userName = user.replace('--username=', '');
    console.log(`Welcome to the File Manager, ${userName}!`);
  } else {
    console.log(`You need to pass the parameter in the format '-- --username=your_username'`);
  }
}