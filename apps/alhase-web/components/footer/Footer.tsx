import PropTypes from 'prop-types';
import styles from './footer.module.scss';

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Alexander Härenstam, {new Date().getFullYear()}.
      <p className={styles.noShow}>
        Original design by:{' '}
        <a href="https://html5up.net" target="_blank">
          HTML5 UP
        </a>
        . Hosted by:{' '}
        <a href="http://000webhost.com" target="_blank">
          000webhost
        </a>
        Built with:
        <a href="https://github.com/zeit/next.js">Next.js</a>
      </p>
      {/*<!-- Original design: Dimension by HTML5 UP
						html5up.net | @ajlkn
                    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license) -->*/}
    </p>
  </footer>
);

Footer.propTypes = {
  timeout: PropTypes.bool,
};

export default Footer;
