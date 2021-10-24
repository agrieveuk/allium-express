import { useParams } from 'react-router-dom';
import codeBanner from '../assets/code-screenshot.png';

const Banner = () => {
  const { topic } = useParams();

  const bannerRef = {
    cooking:
      'https://images.squarespace-cdn.com/content/v1/590be7fd15d5dbc6bf3e22d0/1613775674496-PD68QUX33RKBYXUO4HZI/20201204_Babish_Cookware__0390.jpg?format=1000w',
    football: 'https://s2.dmcdn.net/v/9LRnL1RldOiLtDu_r/x1080',
    coding: codeBanner,
  };

  return (
    <section
      className='banner'
      style={{ backgroundImage: `url(${bannerRef[topic]})` }}
    >
      <h3>{topic}</h3>
    </section>
  );
};

export default Banner;
