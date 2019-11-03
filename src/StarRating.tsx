import React from 'react';

// project
import './StarRating.css';
import Star from './Star';

type Props = {
  stars: number;
  maxStars: number;
  onChange: (stars: number) => void;
};

const StarRating: React.FC<Props> = ({ stars, maxStars, onChange }: Props) => {
  const starArray = React.useMemo(() => {
    return Array(maxStars)
      .fill(0)
      .map((_, i) => i + 1);
  }, [maxStars]);

  const renderStars: React.ReactNodeArray = React.useMemo(() => {
    return starArray.map(n => (
      <Star key={n} filled={n <= stars} onClick={(): void => onChange(n)} />
    ));
  }, [stars, starArray, onChange]);

  return <div className="star-rating">{renderStars}</div>;
};

export default StarRating;
