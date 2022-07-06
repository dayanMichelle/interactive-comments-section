import { useContext } from "react"
import CommentsContext from "../context/commentsProvider"

const useComments = () => {
    return useContext(CommentsContext)
}
export {
    useComments
}