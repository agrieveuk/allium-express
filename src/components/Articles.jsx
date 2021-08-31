import { useEffect, useState } from 'react';

const Articles = () => {
  const [articleList, setArticleList] = useState([]);

  return (
    <main>
      <ul>
        <li>Article 1</li>
        <li>Article 2</li>
      </ul>
    </main>
  );
};

export default Articles;
