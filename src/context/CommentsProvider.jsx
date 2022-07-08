import { createContext, useEffect, useState } from "react";
import generarId from "../helpers/getId";
const CommentsContext = createContext();

const CommentsProviders = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  const addPoints = (id) => {
    const arrayNewComments = comments.map((comment) => {
      //editar comentario si cumple id
      if (comment.id === id) return { ...comment, score: comment.score + 1 };

      // editar reply
      const replies = comment.replies.map((reply) => {
        // editar reply si cumple id
        if (reply.id === id)
          return { ...reply, score: reply.score + 1 };

        // no edita el reply
        return reply;
      });

      //return comentario que no cumple id
      return {...comment, replies};
    });
    setComments(arrayNewComments);
  };

  const lessPoints = (id) => {
    const arrayNewComments = comments.map((comment) => {
      //editar comentario si cumple id
      if (comment.id === id) return { ...comment, score: comment.score - 1 };

      // editar reply
      const replies = comment.replies.map((reply) => {
        // editar reply si cumple id
        if (reply.id === id)
          return { ...reply, score: reply.score - 1 };

        // no edita el reply
        return reply;
      });

      //return comentario que no cumple id
      return {...comment, replies};
    });
    setComments(arrayNewComments);
  };

  const addComment = (e, message) => {
    const newComment = {
      id: generarId(),
      content: message,
      createdAt: Date.now(),
      score: 0,
      user: user,
      replies: [],
    };
    console.log(newComment);
    setComments([...comments, newComment]);
  };
  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setComments(data.comments);
        setUser(data.currentUser);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, []);

  return (
    <CommentsContext.Provider
      value={{
        comments,
        addComment,
        user,
        addPoints,
        lessPoints
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export { CommentsProviders };
export default CommentsContext;
