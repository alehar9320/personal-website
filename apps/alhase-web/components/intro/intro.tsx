import { MainPropTypes } from 'apps/alhase-web/interfaces/types';

export default function Intro({
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
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Intro</h2>
      <p>
        Hello there! ...and welcome to my personal website. My name is Alexander
        Härenstam and I create lovable user experiences - digital products,
        services, and processes that help make people's lives better.
        <br />
        <br />
        Please do have a look around, and as the website is a living prototype
        of mine - do let me know if there's anything missing.
      </p>
      <p>
        Currently, the website is being rebuilt from plain HTML5 (javascript,
        html and css) to better support a modern developer environment. The
        website is rebuilt using the modern javascript framework React, coupled
        with the static site generator Next JS and a headless CMS. While doing
        so, the website will be missing a few features.
      </p>
      <p>
        <strong>Current occupation</strong>
        <br />
        Senior Software Engineer,{' '}
        <a href="https://www.ifsworld.com/" target="_blank">
          IFS World Operations AB
        </a>
        .
      </p>

      <p>
        <strong>
          Education -{' '}
          <a
            href="http://www.chalmers.se/sv/utbildning/program-pa-grundniva/Sidor/Informationsteknik.aspx"
            target="_blank"
          >
            Civilingenjör Informationsteknik
          </a>
        </strong>
        <br />
        2017 -{' '}
        <a
          href="http://www.chalmers.se/en/education/programmes/masters-info/Pages/Management-and-Economics-of-Innovation.aspx
								"
          target="_blank"
        >
          M.sc. Management and Economics of Innovation, Chalmers University of
          Technology.
        </a>
        <br />
        2015 -{' '}
        <a
          href="http://www.chalmers.se/sv/utbildning/program-pa-grundniva/Sidor/Informationsteknik.aspx"
          target="_blank"
        >
          B.sc. Software Engineering, Chalmers University of Technology.
        </a>
      </p>
      {close}
    </article>
  );
}
