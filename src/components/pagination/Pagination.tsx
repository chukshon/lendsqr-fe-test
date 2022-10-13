import React from "react"
import ReactPaginate from "react-paginate"
import styles from "./pagination.module.scss"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

type Props = {
  page: number
  pageCount: number
  handlePageClick?: any
}

const Pagination = ({ page, pageCount, handlePageClick }: Props) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <BiChevronRight size="1.3rem" className={styles.pagination__icon} />
      }
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      initialPage={page}
      pageCount={pageCount}
      breakClassName={styles.break__classname}
      pageClassName={styles.page__classname}
      activeClassName={styles.active__classname}
      disabledClassName={styles.disabled__classname}
      previousLabel={
        <BiChevronLeft size="1.3rem" className={styles.pagination__icon} />
      }
      containerClassName={styles.container__classname}
    />
  )
}

export default Pagination
