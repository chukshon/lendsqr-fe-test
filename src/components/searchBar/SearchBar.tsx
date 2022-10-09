import React from "react"
import styles from "./searchBar.module.scss"
import { AiOutlineSearch } from "react-icons/ai"
const SearchBar = () => {
  return (
    <div className={styles.searchbar__container}>
      <input
        type="text"
        placeholder="Search for anything"
        className={styles.input}
      />
      <div className={styles.search__icon__container}>
        <AiOutlineSearch className={styles.search__icon} />
      </div>
    </div>
  )
}

export default SearchBar
