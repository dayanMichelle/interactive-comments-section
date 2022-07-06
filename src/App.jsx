
import Form from "./components/Form";
import ListComments from "./components/ListComments";
import { CommentsProviders } from "./context/commentsProvider";
import "./hooks/useComments";
import styles from './styles/App.module.css'

function App() {
  return (
    <CommentsProviders>
      <div className={styles.container_app}>
        <ListComments />
        <Form value="Send" />
      </div>
    </CommentsProviders>
  );
}

export default App;
