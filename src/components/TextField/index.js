import './TextField.css'

const TextField = props => {
  const placeholderModified = `${props.placeholder}...`

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input placeholder={placeholderModified} />
    </div>
  )
}

export default TextField
