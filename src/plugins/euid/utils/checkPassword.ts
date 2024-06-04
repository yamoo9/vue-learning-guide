export default function checkPassword(password: string): boolean {
  return /(?=.*\d)(?=.*[a-z])(?=.*(\\!|\\#|\\$|\\~|\\@|\\%|\\^|\\^|\\&|\\*)).{6,}/.test(password);
}
