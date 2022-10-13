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
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
`

export const TableStyled = styled(Table)`
  max-width: 100%;
  background: white;
  border: 1px solid rgba(33, 63, 125, 0.06);
  box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  overflow-x: auto;
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
  color: var(--grey);
  font-weight: 800;
  font-size: 15px;
  p {
    width: max-content;
    font-weight: 800;
  }
  border: none;
`

export const TableBodyStyled = styled(TableBody)`
  background: var(--white); ;
`

export const TableBodyCellStyled = styled(TableCell)`
  text-align: left;
  color: var(--grey);
  border-bottom: 1px solid;
  border-color: var(--border-color);
  width: max-content;
  div {
    width: max-content;
    font-size: 14px;
    font-weight: 400;
  }

  background: var(--white);
`
export const TableBodyRowStyled = styled(TableRow)`
  background: var(--white) 100%;
  color: var(--grey);
`
