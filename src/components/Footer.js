import classes from './Footer.module.css';

const Footer = ({ children }) => {
  return <footer className={classes.footer}>{children}</footer>;
};

export default Footer;
