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
import TableFilter from "../../components/tableFilter/TableFilter"
import styles from "./usertable.module.scss"
import Pagination from "@mui/material/Pagination"
import TablePills from "../tablePills/TablePills"

type Order = "asc" | "desc"
const UserTable = () => {
  const [order, setOrder] = React.useState<Order>("asc")
  const [orderBy, setOrderBy] = React.useState<any>("calories")
  const headers = [
    "Organization",
    "Username",
    "Email",
    "Phone Number",
    "Date Joined",
    "Status",
  ]

  const data = [
    {
      id: 1,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 2,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 3,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 4,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 5,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 6,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
    {
      id: 7,
      Organization: "Lendsqr",
      Username: "Adedeji",
      Email: "adedeji@lendsqr.com",
      "Phone Number": "08078903721",
      "Date Joined": "May 15, 2020 10:00 AM",
      Status: "Active",
    },
  ]

  const finalData = data.map((item, index) => {
    return {
      id: item.id,
      Organization: item.Organization,
      Username: item.Username,
      Email: item.Email,
      "Phone Number": item["Phone Number"],
      "Date Joined": item["Date Joined"],
      Status: <TablePills />,
    }
  })
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1
    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }

  return (
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
            {finalData.map((row: any, index) => (
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
          <select className={styles.select}>
            <option value="grapefruit">20</option>
            <option value="lime">50</option>
            <option value="coconut">100</option>
          </select>
          <p>out of 100</p>
        </div>
        <div className={styles.right__col}>
          <Pagination count={100} siblingCount={0} boundaryCount={1} />
        </div>
      </div>
    </>
  )
}

export default UserTable
