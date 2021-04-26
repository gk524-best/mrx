import React, { ReactNode } from "react";

interface FooterBase {
  fixed: boolean;
  children?: ReactNode;
}

export interface FooterProps extends FooterBase {
  custom: boolean;
  title: string;
}

const FooterWrapper: React.FC<FooterBase> = (props) => {
  const { fixed, children } = props;
  return (
    <div className={`global-footer' ${fixed ? "global-footer-fixed" : ""}`}>
      {children}
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({
  fixed = true,
  custom = false,
  children,
  title = "MRX ",
}) => {
  return custom ? (
    <FooterWrapper fixed={fixed}>{children}</FooterWrapper>
  ) : (
    <FooterWrapper fixed={fixed}>
      <span className="">{title}</span>
    </FooterWrapper>
  );
};

export default Footer;
