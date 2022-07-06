import styles from "../styles/Comment.module.css";
const Comment = ({ comen,reply }) => {
  return (
    <div 
    className={styles.comment}
    style={{
      width: `${reply ? '90%': ''}`,
      marginBlock: `${reply ? '20px': ''}`,
    }}
    >
      <div>Counter</div>
      <div className={styles.comment_info}>
        <div className={styles.comment_header}>
          <div>
            <img src={comen.user.image.png} />
            <h4>{comen.user.username}</h4>
          </div>
          <p>{comen.createdAt}</p>
          <button className={styles.comment_reply}>reply</button>
        </div>
        <div className={styles.comment_message}>
          <p>{comen.content}</p>
        </div>
      </div>
    </div>
  );
};

export { Comment };
