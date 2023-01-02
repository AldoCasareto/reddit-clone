import { FIREBASE_ERRORS } from '../firebase/errors';

export function isValidEmail(email: string) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  console.log(`foo = `, emailRegex.test(email));
  return emailRegex.test(email);
}

export function checkMatchingPasswords(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

export const getErrorMessage = (error: string | undefined, firebaseError: any) => {
  return (
    error ||
    FIREBASE_ERRORS[firebaseError?.message as keyof typeof FIREBASE_ERRORS] ||
    firebaseError?.message
  );
};
