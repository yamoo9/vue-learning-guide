export default function checkEmail(email: string): boolean {
  return /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}
