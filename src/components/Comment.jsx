import { useState } from "react";
import { useComments } from "../hooks/useComments";
import styles from "../styles/Comment.module.css";
import Counter from "./Counter";
import Form from "./Form";
const Comment = ({ comen, reply }) => {
  const [newReply, setNewReply] = useState(false);

  const handleNewReply = () => {
    setNewReply(!newReply);
  };

  return (
    <div
    style={{width:'-webkit-fill-available'}}
    >
      <div
        className={styles.comment}
        style={{
          width: `${reply ? "90%" : ""}`,
        }}
      >
        <Counter comen={comen} />
        <div className={styles.comment_info}>
          <div className={styles.comment_header}>
            <div>
              <img src={comen.user.image.png} />
              <h4>{comen.user.username}</h4>
            </div>
            <p>{comen.createdAt}</p>
            <button
              onClick={() => {
                handleNewReply();
              }}
              className={styles.comment_reply}
            >
              <i class="fa-solid fa-reply"></i> reply
            </button>
          </div>
          <div className={styles.comment_message}>
            <p>{comen.content}</p>
          </div>
        </div>
      </div>
      {newReply && <Form reply={true} value="Send" />}
    </div>
  );
};

export { Comment };
