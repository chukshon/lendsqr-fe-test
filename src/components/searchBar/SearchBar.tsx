import React from "react"
import styles from "./searchBar.module.scss"
const SearchBar = () => {
  return (
    <div className={styles.searchbar__container}>
      <input type="text" placeholder="Search for anything" />
      <div className="search__container"></div>
    </div>
  )
}

export default SearchBar
