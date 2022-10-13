import React from "react"
import {
  TableContainerStyled,
  TableStyled,
  TableHeadStyled,
  TableHeadRowStyled,
  TableHeadCellStyled,
  TableBodyRowStyled,
  TableBodyCellStyled,
} from "./style"
import TableBody from "@mui/material/TableBody"
import CircularProgress from "@mui/material/CircularProgress"
import styles from "./usertable.module.scss"
import Pagination from "../pagination/Pagination"
import TableFilter from "../tableFilter/TableFilter"
import { TableDataT } from "../../types/index"
import moment from "moment"

type Props = {
  userData?: TableDataT[]
  loading: boolean
  success?: boolean
  error?: boolean
}
const UserTable = ({ userData, loading, error, success }: Props) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(20)
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(+e.target.value)
    setPage(0)
  }
  const handlePageClick = (e: any) => {
    setPage(e.selected)
  }
  const headers = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ]

  return (
    <>
      {loading && <CircularProgress />}
      {!loading && error && (
        <h2 className={styles.usertable__container}>Something went wrong...</h2>
      )}
      {!loading && !error && userData?.length === 0 && (
        <h2 className={styles.usertable__container}>No users were found now</h2>
      )}
      {!loading && !error && userData!.length > 0 && (
        <>
          <TableContainerStyled>
            <TableStyled
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              className="table_styled"
            >
              <TableHeadStyled>
                <TableHeadRowStyled className={"table_head_row"}>
                  {headers.map((item, index) => {
                    return (
                      <TableHeadCellStyled
                        className={"table_head_cell"}
                        key={index}
                      >
                        <span className={styles.header__grid}>
                          <p>{item}</p>
                          <TableFilter />
                        </span>
                      </TableHeadCellStyled>
                    )
                  })}
                </TableHeadRowStyled>
              </TableHeadStyled>
              <TableBody>
                {userData &&
                  userData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any, index: any) => (
                      <TableBodyRowStyled key={row.id}>
                        {headers.map((item, index) => {
                          return (
                            <TableBodyCellStyled
                              key={index}
                              className="table_body_cell"
                            >
                              <div>{row[item]}</div>
                            </TableBodyCellStyled>
                          )
                        })}
                      </TableBodyRowStyled>
                    ))}
              </TableBody>
            </TableStyled>
          </TableContainerStyled>
          <div className={styles.table__footer}>
            <div className={styles.left__col}>
              <p>Showing</p>
              <select
                className={styles.select}
                onChange={handleChangeRowsPerPage}
              >
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>{100}</option>
              </select>
              <p>out of {rowsPerPage}</p>
            </div>
            <div className={styles.right__col}>
              <Pagination
                page={page}
                pageCount={Math.ceil(userData!.length / rowsPerPage)}
                handlePageClick={handlePageClick}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default UserTable
