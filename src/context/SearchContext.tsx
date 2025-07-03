import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
    previewLink?: string;
  };
}

interface SearchContextType {
  searchResults: Book[];
  setSearchResults: (results: Book[]) => void;
  query: string;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const SearchProvider: React.FC<Props> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [query, setQuery] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
