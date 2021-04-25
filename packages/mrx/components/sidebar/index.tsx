import React, { Fragment, ReactNode } from 'react';

interface IProps {
  fixed: boolean;
  custom: boolean;
  children: ReactNode[]
}

const Footer: React.FC<IProps> = ({ fixed = true, custom = false, children = null }) => {
  return (
    <Fragment>
      
    </Fragment>
  )
}

export default Footer;