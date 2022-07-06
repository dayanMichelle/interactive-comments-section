import styles from '../styles/Form.module.css'
const Form = ({value}) => {
  return (
    <form>
        <div>
            <img src='https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg' />
        </div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button type='submit'>{value}</button>
        </div>
    </form>
  )
}

export default Form