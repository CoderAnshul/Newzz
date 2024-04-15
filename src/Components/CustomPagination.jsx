import { Pagination } from "react-bootstrap";

const CustomPagination = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItem = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageItems;
  };

  return (
    <div className="position-fixed bottom-0 start-50 ">
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        />
        {renderPageItem()}
        <Pagination.Next disabled={currentPage === totalPages} 
        onClick={() => handlePageClick(currentPage + 1)}
        />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
