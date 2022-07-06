import { Comment } from "./Comment";
import { useComments } from "../hooks/useComments";
import styles from "../styles/ListComments.module.css";

const ListComments = () => {
  const { comments } = useComments();

  return (
    <div className={styles.list}>
      {comments.comments?.map((comen) => (
        <div className={styles.comment}>
          <Comment key={comen.id} comen={comen} />
          {
            comen.replies.length > 0 &&
            
              comen.replies.map(reply => (
                <Comment key={comen.id} reply={true} comen={reply} />
              ))
            
          }
        </div>
        
      ))}
    </div>
  );
};

export default ListComments;
