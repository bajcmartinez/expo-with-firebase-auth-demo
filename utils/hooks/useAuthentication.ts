import React from 'react';
import { AuthenticationContext, AuthenticationContextParams } from '../providers/AuthenticationProvider';

export function useAuthentication() {
  return React.useContext(AuthenticationContext) as AuthenticationContextParams;
}
