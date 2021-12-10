import React from 'react';
import { User } from "firebase/auth";

export type AuthenticationContextParams = {
  user?: User;
}

export const AuthenticationContext = React.createContext<AuthenticationContextParams>({});
export const AuthenticationProvider = AuthenticationContext.Provider;
