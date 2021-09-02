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

const patchArticle = async (article_id, inc_votes) => {
  const { data } = await newsApi.patch(`/articles/${article_id}`, {
    inc_votes,
  });
  return data.article.votes;
};

const postComment = async (article_id, username, body) => {
  const { data } = await newsApi.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
  return data.comment;
};

export { getArticles, getArticleById, getComments, patchArticle, postComment };
