import { Auth } from 'firebase/auth';
import { useEffect } from 'react';
import { FIREBASE_ERRORS } from '../firebase/errors';

export function isValidEmail(email: string) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

export function checkMatchingPasswords(password: string, confirmPassword: string) {
  return password === confirmPassword;
}

export const getErrorMessage = (error: string | undefined, firebaseError: any) => {
  return error || FIREBASE_ERRORS[firebaseError?.message as keyof typeof FIREBASE_ERRORS];
};

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const signOut = (auth: Auth) =>
  auth
    .signOut()
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
