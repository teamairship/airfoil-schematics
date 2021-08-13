import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { useApolloClient } from './ApolloUtils';

export const ApolloWrapper: React.FC = ({ children }) => {
  const client = useApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
