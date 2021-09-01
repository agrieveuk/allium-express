import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-express-news.herokuapp.com/api',
});

const getArticles = async (topic) => {
  const { data } = await newsApi.get('/articles', { params: { topic } });

  return data.articles;
};

const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

const getComments = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export { getArticles, getArticleById, getComments };
