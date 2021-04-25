import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <FontAwesomeIcon icon={faGem} transform="grow-18" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Alexander Härenstam</h1>
        <h4>Software Developer, Creative Thinker, Innovation Driver</h4>
        <h5>
          <i>Graduate of Chalmers University of Technology</i>
        </h5>
        {/*<p>
          A fully responsive site template designed by{' '}
          <a href="https://html5up.net">HTML5 UP</a> and released
          <br />
          for free under the{' '}
        <a href="https://html5up.net/license">Creative Commons</a> license.
        </p>*/}
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro');
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work');
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about');
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
