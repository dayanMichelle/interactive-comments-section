import { Comment } from "./Comment";
import { useComments } from "../hooks/useComments";
import styles from "../styles/ListComments.module.css";

const ListComments = () => {
  const { comments } = useComments();

  return (
    <div className={styles.list}>
      {comments.length > 0 &&
        comments.map((comen) => {
          console.log(comen.id)
          return (
            <div className={styles.comment} key={comen.id}>
              <Comment comen={comen} />
              {comen.replies.length > 0 &&
                comen.replies.map((reply) => (
                  <Comment key={reply.id} reply={true} comen={reply} />
                ))}
            </div>
          );
        })}
    </div>
  );
};

export default ListComments;
