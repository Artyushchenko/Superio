import { Header } from '../Header/Header'
import styles from './Slide.module.scss'
import { Search } from './components/Search Part/Search'
import { Statistics } from './components/Statistics/Statistics'

export const Slide = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Search />
      <Statistics />
    </section>
  )
}