import styles from './Logo.module.scss'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  return (
    <NavLink to="/">
      <div className={styles.logo}>
        <img src="../../../../../public/images/header/logo.png" alt="Logo" />
        <span>Superio</span>
      </div>
    </NavLink>
  )
}