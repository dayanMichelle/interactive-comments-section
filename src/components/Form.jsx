import { useState } from 'react'
import { useComments } from '../hooks/useComments'
import styles from '../styles/Form.module.css'
const Form = ({value,reply}) => {
  const { addComment, user } = useComments()
  const [message, setMessage] = useState('')

  console.log(user?.image?.png)

  const handleSubmit = (e) => {
    e.preventDefault()
    addComment(e,message)
    setMessage('')
  }
  return (
    <form
    onSubmit={handleSubmit}
    style={{
      width:`${reply ? '85%' : ''}`,
    }}
    >
      <div className={styles.container_form}>
         <div>
            <img src={ user?.image?.png || './images/avatars/image-amyrobson.png'} />
        </div>
        <div>
            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
        </div>
        <div>
            <button type='submit'>{value}</button>
        </div>
      </div>
       
    </form>
  )
}

export default Form