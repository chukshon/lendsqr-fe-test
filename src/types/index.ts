export type MenuT = {
  open: boolean
  handleClose: (se: React.SyntheticEvent) => void
  handleOpen: (se: React.SyntheticEvent) => void
}

export type SubmenuProps = {
  title: string
  link: string
  icon: any
}
export type MenuProps = {
  title: string
  subMenu: SubmenuProps[]
}
