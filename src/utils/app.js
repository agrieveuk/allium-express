import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-express-news.herokuapp.com/api',
});

const getArticles = async ({ topic, sort_by, page }) => {
  const { data } = await newsApi.get('/articles', {
    params: { topic, limit: 6, sort_by, page },
  });

  return data;
};

const getArticleById = async (article_id) => {
  const { data } = await newsApi.get(`/articles/${article_id}`);
  return data.article;
};

const getComments = async (article_id, page) => {
  const { data } = await newsApi.get(`/articles/${article_id}/comments`, {
    params: {
      limit: 4,
      page,
    },
  });
  return data.comments;
};

const patchArticle = async ({ article_id, inc_votes }) => {
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

const patchComment = async ({ comment_id, inc_votes }) => {
  const { data } = await newsApi.patch(`/comments/${comment_id}`, {
    inc_votes,
  });
  return data.comment.votes;
};

const deleteComment = async (comment_id) => {
  const { data } = await newsApi.delete(`/comments/${comment_id}`);
  return data;
};

export {
  getArticles,
  getArticleById,
  getComments,
  patchArticle,
  postComment,
  patchComment,
  deleteComment,
};
