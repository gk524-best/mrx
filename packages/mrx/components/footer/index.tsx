import React, { Fragment, ReactNode } from 'react';

interface Props {
  fixed: boolean;
  children: ReactNode[]
}

interface FooterProps extends Props {
    custom: boolean;
    title: string;
}

const FooterWrapper: React.FC<Props> = (props) => {
    const { fixed, children } = props
    return (
        <div className={`global-footer' ${fixed ? 'global-footer-fixed' : ''}`}>
            {children}
        </div>
    )
}

const Footer: React.FC<FooterProps> = ({ fixed = true, custom = false, children = null }) => {
    return (
        custom ? (
        <FooterWrapper fixed={fixed}>
            {children}
        </FooterWrapper>
            
        ) : (
            <FooterWrapper fixed={fixed}>
            
            </FooterWrapper>      
      )
  )
}

export default Footer;