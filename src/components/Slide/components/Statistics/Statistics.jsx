import styles from './Statistics.module.scss'

export const Statistics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <span className={styles.bigger}>97216</span>
        <span>Jobs</span>
      </div>

      <div className={styles.block}>
        <span className={styles.bigger}>4782</span>
        <span>Members</span>
      </div>

      <div className={styles.block}>
        <span className={styles.bigger}>5322</span>
        <span>Resume</span>
      </div>

      <div className={styles.block}>
        <span className={styles.bigger}>6329</span>
        <span>Company</span>
      </div>
    </div>
  )
}