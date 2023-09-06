import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  children: React.ReactNode;
}

export const Mobile = ({ children }: IProps) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return <>{isMobile && children}</>;
};

export const Tablet = ({ children }: IProps) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });

  return <>{isTablet && children}</>;
};

export const Desktop = ({ children }: IProps) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return <>{isDesktop && children}</>;
};
