import { createContext, useEffect, useState } from "react";
import generarId from "../helpers/getId";
const CommentsContext = createContext();

const CommentsProviders = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  const addComment = (e,message) => {
    
    const newComment = {
      id: generarId(),
      content: message,
      createdAt: Date.now(),
      score:0,
      user: user,
      replies:[]
    }
    console.log(newComment)
    setComments([...comments,newComment])
  }
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
        user
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export { CommentsProviders };
export default CommentsContext;
