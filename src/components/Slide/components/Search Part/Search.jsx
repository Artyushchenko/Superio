import styles from './Search.module.scss'
import { MainText } from './components/Main Text/MainText'
import { SearchFields } from './components/Search Fields/SearchFields'

export const Search = () => {
  return (
    <div className={styles.search}>
      <MainText />
      <SearchFields />
    </div>
  )
}