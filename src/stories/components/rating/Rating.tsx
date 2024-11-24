import React from 'react';

import './rating.css';

export interface RatingProps {
  primary?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Rating = ({
  primary = false,
  size = 'medium',
  color,
  label,
  ...props
}: RatingProps) => {
  return (
      <div className="raiting">
          <div className={`raiting__group__${size}`} {...props}>
              <input type="radio" className={`star__${size}`} id="one" name="star_rating"/>
              <input type="radio" className={`star__${size}`} id="one" name="star_rating"/>
              <input type="radio" className={`star__${size}`} id="one" name="star_rating"/>
              <input type="radio" className={`star__${size}`} id="one" name="star_rating"/>
              <input type="radio" className={`star__${size}`} id="one" name="star_rating"/>
              <style jsx>{`
                  input {
                      color: ${color};
                  }
              `}</style>
          </div>
      </div>
  );
};
