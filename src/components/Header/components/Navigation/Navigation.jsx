import styles from './Navigation.module.scss'
import { IoIosArrowDown } from 'react-icons/io'

export const Navigation = () => {
  const menuItems = ['Home','Find jobs','Employers','Candidates','Blog','Pages',];
  
  return (
    <nav className={styles.navigation}>
      <ul>
        {menuItems.map((item, index) => <li key={index}>{item} {<IoIosArrowDown fill='#000' size={15}/>}</li>)}
      </ul>
    </nav>
  )
}