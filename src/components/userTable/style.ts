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
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
`

export const TableHeadStyled = styled(TableHead)`
  width: max-content;
`

export const TableHeadRowStyled = styled(TableRow)`
  width: 100%;
  background: white;
`

export const TableHeadCellStyled = styled(TableCell)`
  text-align: left;
  color: #545f7d;
  font-size: 15px;
  width: max-content;
  p {
    width: max-content;
  }
  border: none;
`

export const TableBodyStyled = styled(TableBody)`
  background: white;
`

export const TableBodyCellStyled = styled(TableCell)`
  text-align: left;
  color: #545f7d;
  border-bottom: 1px solid rgba(33, 63, 125, 0.1);
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
  background: white 100%;
  width: max-content;
  color: grey;
`
