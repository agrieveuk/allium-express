import Pagination from '@material-ui/lab/Pagination';

const PageButton = ({ page, setPage, totalArticles, totalComments }) => {
  const totalPages = totalArticles
    ? Math.ceil(totalArticles / 6)
    : Math.ceil(totalComments / 4);

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
