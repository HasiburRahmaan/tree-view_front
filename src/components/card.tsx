import React, { ReactNode, FC } from 'react';

interface CardProps {
  children: ReactNode;
  className?: String
}

const Card: FC<CardProps> = ({ children, className="" }) => {
  return (
    <div className={`max-w-lg bg-white border border-gray-200 rounded-lg shadow ${className}`}>
      <div className="p-5">{children}</div>
    </div>
  );
};

export default Card;