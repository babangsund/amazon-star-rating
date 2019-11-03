import React from 'react';

// project
import './Star.css';
import StarFilled from './icons/star-filled.svg';
import StarOutline from './icons/star-outline.svg';

type Props = {
  filled: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const Star: React.FC<Props> = ({ filled, onClick }: Props) => {
  const Icon = React.useMemo(() => (filled ? StarFilled : StarOutline), [
    filled,
  ]);

  return (
    <button className="star-button" onClick={onClick}>
      <Icon className="star" />
    </button>
  );
};

export default Star;
