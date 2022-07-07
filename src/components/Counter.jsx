import styles from '../styles/Counter.module.css'
const Counter = ({comen}) => {
  return (
    <div className={styles.counter}>
        <i class="fa-solid fa-plus"></i>
        <p>{comen.score}</p>
        <i class="fa-solid fa-minus"></i>
    </div>
  )
}

export default Counter