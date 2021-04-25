export type MainPropTypes = {
  article?: string;
  articleTimeout?: boolean;
  onCloseArticle?: () => void;
  timeout?: boolean;
  isArticleVisible?: boolean;
};

export type ArticleTypes = 'intro' | 'work' | 'about' | 'contact';
