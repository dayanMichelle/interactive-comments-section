import { createContext, useEffect, useState } from "react";

const CommentsContext = createContext();

const CommentsProviders = ({ children }) => {
  const [comments, setComments] = useState({});
 

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setComments(data);
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
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export { CommentsProviders };
export default CommentsContext;
