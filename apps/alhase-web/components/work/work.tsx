import { MainPropTypes } from 'apps/alhase-web/interfaces/types';

export default function Work({
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
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Work</h2>
      <p>
        I see myself as a user experience designer and business developer, with
        a specialization on the software industry. Historically, I have carried
        out assignments involving everything from pre-studies, rapid
        prototyping, and business value propositions, to software development,
        computer help, and website hosting.{' '}
      </p>

      <p>
        My areas of expertise stretch across software technology, management,
        design, and innovation.
      </p>

      <h3>Services</h3>
      <div id="service-card-wrapper">
        <div className="service-card">
          <div className="service-card-content-holder">
            <div className="service-card-title">
              <h4>Concept Design &amp; Innovation</h4>
            </div>
            <i
              className="icon fa-lightbulb-o service-card-icon fa-4x"
              aria-hidden="true"
            ></i>
            <div className="service-card-description">
              Do you have an idea, or a problem, but don't know where to start?
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-content-holder">
            <div className="service-card-title">
              <h4>Software Development</h4>
            </div>
            <i
              className="icon fa-code service-card-icon fa-4x"
              aria-hidden="true"
            ></i>
            <div className="service-card-description">
              Do you have a draft, but want help turning it into code?
            </div>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-content-holder">
            <div className="service-card-title">
              <h4>Product Management</h4>
            </div>
            <i
              className="icon fa-line-chart service-card-icon fa-4x"
              aria-hidden="true"
            ></i>
            <div className="service-card-description">
              Do you have a software application, but want help setting the
              direction?
            </div>
          </div>
        </div>
      </div>
      {close}
    </article>
  );
}
