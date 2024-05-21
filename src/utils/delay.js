export default function delay(timeout = 1000, logMessage = '') {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
      logMessage && console.log(logMessage);
    }, timeout)
  );
}
