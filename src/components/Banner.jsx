import { useParams } from 'react-router-dom';

const Banner = () => {
  const { topic } = useParams();

  const bannerRef = {
    cooking:
      'https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1613775674496-PD68QUX33RKBYXUO4HZI/20201204_Babish_Cookware__0390.jpg?format=1000w',
    football: 'https://s2.dmcdn.net/v/9LRnL1RldOiLtDu_r/x1080',
    coding: 'http://techworm.page/wp-content/uploads/2019/05/download-17.png',
  };

  return (
    <section className='banner'>
      <h3>{topic}</h3>
      <img src={bannerRef[topic]} alt={`${topic} banner`} />
    </section>
  );
};

export default Banner;
