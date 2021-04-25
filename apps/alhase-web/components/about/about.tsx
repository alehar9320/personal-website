import { MainPropTypes } from 'apps/alhase-web/interfaces/types';
import Image from 'next/image';

export default function About({
  article,
  articleTimeout,
  onCloseArticle,
}: MainPropTypes) {
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle();
      }}
    ></div>
  );

  return (
    <article
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">About</h2>
      <Image
        src="/images/work_pic.jpg"
        alt="Picture of the author"
        width={963}
        height={320}
      ></Image>
      <p>
        The name Alexander translates to: "Defender, protector of man" (as
        originally coined in Greek). Whilst a very cool statement, it evidently
        has very little to do with me. I enjoy the simple things in life; a cup
        of fresh tea in the morning, a beautiful sunrise, and the company of
        friends.
      </p>

      <p>
        Professionally, I'm passionate about creating computer software that
        people love.
      </p>

      <p>I build, design, manage, and strategize.</p>
      <p>
        Currently located in{' '}
        <a href="https://goo.gl/maps/mDzbGj338ZuxcUyi9" target="_blank">
          Gothenburg, Sweden.
        </a>
      </p>

      {/*</article><!-- <p>Inspiration driven by innovation and change in our age of discontinuity; seeing something go from a simple idea to a finished product. To watch it come to life.</p>
            <p>I firmly believe that in a rewarding and stimulating environment there is no limit to the possibilities and that in order to achieve great things, one must surround oneself with people who complement one's abilities.</p>
            <p>I strive for team-oriented roles where collaboration with others enable great results. Further, I enjoy learning new skills and taking on new challenges. My ideal position is one where I get to work with innovation in some way, perhaps as a future manager. I do however fancy most roles within the software industry.</p> -->*/}

      {/*<p>
        <i>
          Use the resources below if you wish to learn more. Don't hesitate to{' '}
          <a href="#contact">reach out</a>!
        </i>
      </p>*/}

      {/*<a href="#interests">
        <button className="special">Interests</button>
      </a>

      <p></p>

      <a href="#life-story">
        <button className="special">My life's story</button>
      </a>

      <a href="#family-history">
        <button className="special">Family History</button>
      </a>

      <p></p>

      <a href="#achievements">
        <button className="special">Achievements</button>
      </a>

      <br />

      <a href="#home-office">
        <button className="special">Explore Private Office</button>
      </a>

        <br />*/}
      {close}
    </article>
  );
}
