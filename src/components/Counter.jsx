import { useComments } from '../hooks/useComments'
import styles from '../styles/Counter.module.css'
const Counter = ({comen,reply}) => {
  const {addPoints,lessPoints} = useComments()
  return (
    <div className={styles.counter}>
        <i onClick={()=>addPoints(comen.id)} class="fa-solid fa-plus"></i>
        <p>{comen.score}</p>
        <i onClick={()=>lessPoints(comen.id)} class="fa-solid fa-minus"></i>
    </div>
  )
}

export default Counter