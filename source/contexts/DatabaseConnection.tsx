import { createContext } from 'react';

import dataSource from '../database/data-source';
import ChapterRepository from '../database/repositories/ChapterRepository';
import NovelRepository from '../database/repositories/NovelRepository';

interface DatabaseConnectionContextData {
  ChapterRepository: ChapterRepository;
  NovelRepository: NovelRepository;
}

export const DatabaseConnectionContext = createContext<DatabaseConnectionContextData>(
  {} as DatabaseConnectionContextData
);

export default function DatabaseConnectionProvider({ children }: React.PropsWithChildren) {
  return (
    <DatabaseConnectionContext.Provider
      value={{
        ChapterRepository: new ChapterRepository(dataSource),
        NovelRepository: new NovelRepository(dataSource),
      }}>
      {children}
    </DatabaseConnectionContext.Provider>
  );
}
