import axios from 'axios';

const newsApi = axios.create({
  baseURL: 'https://nc-express-news.herokuapp.com/api',
});

const getArticles = async (topic) => {
  const { data } = await newsApi.get('/articles', { params: { topic } });

  return data.articles;
};

export { getArticles };
