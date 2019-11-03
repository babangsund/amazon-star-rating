import React from 'react';

type UseStars = [number, (stars: number) => void];

const useStars = (initialStars: number): UseStars => {
  const [stars, setStars] = React.useState(initialStars);
  return [stars, React.useCallback(n => setStars(p => (p === n ? 0 : n)), [])];
};

export default useStars;
