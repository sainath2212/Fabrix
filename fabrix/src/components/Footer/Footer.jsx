import { Link } from 'react-router-dom';
import './Footer.css';
export const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-links'>
        <a
          target={'_blank'}
          href='https://github.com/sainath2212'
          className='fab fa-github'
        ></a>
        <a
          target={'_blank'}
          href='https://www.linkedin.com/in/meesala-sree-sai-nath-5786b11b5/'
          className='fab fa-linkedin'
        ></a>
      </div>
      <div className='footer-text'>© {new Date().getFullYear()} Fabrix. All rights reserved.</div>
    </footer>
  );
};
