import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import { styled } from "@mui/material"

export const TableContainerStyled = styled(TableContainer)`
  max-height: 500px;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`

export const TableStyled = styled(Table)`
  width: 100%;
  background: white;
`

export const TableHeadStyled = styled(TableHead)`
  border-radius: 20px;
  background: white;
  width: max-content;
`

export const TableHeadRowStyled = styled(TableRow)`
  width: 100%;
  background: white;
`

export const TableHeadCellStyled = styled(TableCell)`
  text-align: left;
  color: black;
  font-size: 15px;
  width: max-content;
  p {
    width: max-content;
  }
`

export const TableBodyStyled = styled(TableBody)`
  background: white;
`

export const TableBodyCellStyled = styled(TableCell)`
  text-align: left;
  color: black;
  width: max-content;
  p {
    width: max-content;
  }
  div {
    width: max-content;
  }
  background: white;
`
export const TableBodyRowStyled = styled(TableRow)`
  border-style: solid;
  border: none;
  background: white 100%;
  width: max-content;
  color: grey;
`
