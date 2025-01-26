import { useState, useEffect } from 'react';

export const useFirstVisit = (pageKey: string) => {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem(`visited_${pageKey}`);
    if (!visited) {
      sessionStorage.setItem(`visited_${pageKey}`, 'true');
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, [pageKey]);

  return isFirstVisit;
};
