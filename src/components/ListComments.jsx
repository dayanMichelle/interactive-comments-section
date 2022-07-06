import { Comment } from './Comment'
import { useComments } from "../hooks/useComments"
import styles from '../styles/ListComments.module.css'

const ListComments = () => {
    const { comments } = useComments()
  return (
    <div className={styles.list}>
        {
            comments.comments.map(comen => (
                <Comment comen={comen} />
            ))
        }
    </div>
  )
}

export default ListComments