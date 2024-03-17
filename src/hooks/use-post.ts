import { useState } from 'react';

export default function usePost() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);

  return { isLoading, setIsLoading, error, setError };
}
