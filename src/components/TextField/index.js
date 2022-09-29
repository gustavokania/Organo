import './TextField.css'

const TextField = props => {
  const placeholderModified = `${props.placeholder}...`

  const onType = event => {
    props.onAlteration(event.target.value)
  }

  return (
    <div className="field-text">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onType}
        required={props.required}
        placeholder={placeholderModified}
      />
    </div>
  )
}

export default TextField
