import { useContext } from 'react';

import { DatabaseConnectionContext } from '../contexts/DatabaseConnection';

/** Returns the database connection context. */
export default function useDatabase() {
  return useContext(DatabaseConnectionContext);
}
