const PageButton = ({ page, setPage, totalArticles }) => {
  const limit = 6;
  const totalPages = Math.ceil(totalArticles / limit);

  const changePage = (direction) => {
    setPage((currPage) => {
      return currPage + direction;
    });
  };

  return (
    <div>
      <button disabled={page === 1} onClick={() => changePage(-1)}>
        {'<'}
      </button>
      <span> {page} </span>
      <button disabled={page === totalPages} onClick={() => changePage(1)}>
        {'>'}
      </button>
    </div>
  );
};

export default PageButton;
