import React from "react"
import ReactPaginate from "react-paginate"

const Pagination = () => {
  const [pageCount, setPageCount] = React.useState(0)
  const handlePageClick = (e: any) => {}
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  )
}

export default Pagination
