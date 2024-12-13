import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const UserPagination = (props) => {
  let { currentPage, totalPages, limit, range } = props;
  const navigate = useNavigate(); // Dùng useNavigate để điều hướng

  // Hàm xử lý sự kiện khi phân trang
  const handlePageClick = (selectedPage) => {
    const newPageNumber = selectedPage.selected + 1; // React Paginate trả về index bắt đầu từ 0
    navigate(`/admin/manage-user/page/${newPageNumber}`);
  };
  return (
    <div className="pagination-container">
      <ReactPaginate
        forcePage={currentPage - 1 || 0}
        pageCount={totalPages} // Sử dụng totalPages từ dữ liệu
        pageRangeDisplayed={range} // Hiển thị số trang cần thiết
        marginPagesDisplayed={limit} // Hiển thị thêm các trang ở đầu và cuối
        onPageChange={handlePageClick} // Sự kiện khi click vào trang
        containerClassName={"pagination"} // Class cho phần tử chứa
        activeClassName={"active"} // Class cho trang đang chọn
        previousLabel={"Previous"} // Nhãn cho nút "Previous"
        nextLabel={"Next"} // Nhãn cho nút "Next"
      />
    </div>
  );
};
export default UserPagination;
