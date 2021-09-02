import Pagination from '@material-ui/lab/Pagination';

const PageButton = ({ page, setPage, totalArticles }) => {
  const limit = 6;
  const totalPages = Math.ceil(totalArticles / limit);

  const changePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className='page-buttons'>
      <Pagination count={totalPages} page={page} onChange={changePage} />
    </div>
  );
};

export default PageButton;
