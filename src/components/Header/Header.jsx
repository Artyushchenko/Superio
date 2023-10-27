import styles from './Header.module.scss'
import { JoinButton } from './components/JoinButton/JoinButton'
import { Logo } from "./components/Logo/Logo"
import { Navigation } from "./components/Navigation/Navigation"
import { PostButton } from './components/PostButton/PostButton'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <JoinButton />
      <PostButton />
    </header>
  )
}