import { useState } from 'react';

export default function usePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return { isLoading, setIsLoading, isError, setIsError };
}
