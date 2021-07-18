import { useCallback, useState } from 'react';

export const useCount = (): [number, () => void] => {
  const [count, setCount] = useState<number>(() => {
    if (typeof localStorage === 'undefined') {
      return 0;
    }

    const storedNumber = parseInt(localStorage.getItem('@count'));
    return storedNumber || 0;
  });

  const updateCount = useCallback(() => {
    const nextCount = count + 1;
    localStorage.setItem('@count', nextCount.toString());
    setCount(nextCount);
  }, [count]);

  return [count, updateCount];
};
