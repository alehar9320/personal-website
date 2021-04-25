import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { MainPropTypes as IProps } from 'apps/alhase-web/interfaces/types';
import Intro from '../intro/intro';

export default function Main({
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
}: IProps) {
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle();
      }}
    ></div>
  );

  return (
    <div id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
      <Intro
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      ></Intro>

      <article
        id="work"
        className={`${article === 'work' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src="/images/pic02.jpg" alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src="/images/pic03.jpg" alt="" />
        </span>
        <p>
          Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
          eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat
          volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam.
          Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero
          et malesuada fames ac ante ipsum primis in faucibus. Cras viverra
          ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={4}></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
}
