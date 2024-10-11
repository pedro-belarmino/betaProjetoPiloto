import React, { FC } from 'react';
import '../../styles/background.sass'

interface BackgroundProps {
    children: React.ReactNode;
  }

  const Background: FC<BackgroundProps> = ({ children }) => {
    return (
        <div className="fieldBackground">
            {children}
        </div>
    )
}

export default Background;