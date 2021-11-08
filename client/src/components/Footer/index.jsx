import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './style.css';

const Footer = () => (
  <footer>
    <div className="footer-com">

      <div className='sentence'>
        <p>Follow Us</p>
        <p>Follow us on our social accounts to find the best events.</p>
      </div>
      <div className='icons'>
        <FacebookRoundedIcon />
        <TwitterIcon />
        <WhatsAppIcon />
        <InstagramIcon />
      </div>
      <div className="last-div">
        <p>Eventy , INC . 2021</p>
        <p>Terms . Privacy . FAQs . Sitemap</p>
      </div>
    </div>
  </footer>
);

export default Footer;
