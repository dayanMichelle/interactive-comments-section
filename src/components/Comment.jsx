import { useState } from "react";
import { useComments } from "../hooks/useComments";
import styles from "../styles/Comment.module.css";
import Counter from "./Counter";
import Form from "./Form";
const Comment = ({ comen, reply, id, idReply }) => {
  const [newReply, setNewReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const { handleDeleted, user } = useComments();

  const handleNewReply = () => {
    setNewReply(!newReply);
  };

  return (
    <div
      style={{
        width: "-webkit-fill-available",
        display: `${reply ? "contents" : ""}`,
      }}
    >
      <div
        className={styles.comment}
        style={{
          width: `${reply ? "90%" : ""}`,
        }}
      >
        <Counter reply={true} comen={comen} />
        <div className={styles.comment_info}>
          <div className={styles.comment_header}>
            <div>
              <img src={comen.user.image.png} />
              <h4>{comen.user.username}</h4>
            </div>
            <p>{comen.createdAt}</p>
            {comen.user.username != user.username ? (
              !reply && (
                <button
                  onClick={() => {
                    handleNewReply();
                  }}
                  className={styles.comment_reply}
                >
                  <i class="fa-solid fa-reply"></i> reply
                </button>
              )
            ) : (
              <div>
                <button 
                className={styles.btn_delete}
                onClick={() => handleDeleted(idReply)}>
                  {" "}
                  <i class="fa-solid fa-trash-can"></i> Delete
                </button>

                <button
                  className={styles.btn_edit}
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  {" "}
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
              </div>
            )}
          </div>
          <div className={styles.comment_message}>
            <p>{comen.content}</p>
          </div>
        </div>
      </div>
      {newReply && (
        <Form
          id={id}
          handleNewReply={handleNewReply}
          reply={true}
          value="Send"
        />
      )}
      {edit && (
        <Form
          id={id}
          handleNewReply={handleNewReply}
          reply={true}
          value="Update"
        />
      )}
    </div>
  );
};

export { Comment };
