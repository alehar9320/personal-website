import { MainPropTypes as IProps } from 'apps/alhase-web/interfaces/types';
import Intro from '../intro/intro';
import Work from '../work/work';
import About from '../about/about';
import Contact from '../contact/contact';

export default function Main({
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
}: IProps) {
  return (
    <div id="main" style={timeout ? { display: 'flex' } : { display: 'none' }}>
      <Intro
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      ></Intro>

      <Work
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      ></Work>

      <About
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      ></About>

      <Contact
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      ></Contact>
    </div>
  );
}
