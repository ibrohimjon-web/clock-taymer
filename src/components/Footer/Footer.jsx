import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>
        © {year} <span className='footer-author'>Ikromjonov Ibrohimjon</span> — Barcha huquqlar
        himoyalangan.
      </p>
    </footer>
  );
};

export default Footer;
