import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'

const Form = props => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const onSave = event => {
    event.preventDefault()
    props.onNewContributor({
      name,
      role,
      image,
      team
    })
    setName('')
    setRole('')
    setImage('')
    setTeam('')
  }
  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>PREENCHA OS DADOS PARA CRIAR O CARD DO COLABORADOR</h2>
        <TextField
          value={name}
          onAlteration={value => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
        />
        <TextField
          value={role}
          onAlteration={value => setRole(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
        />
        <TextField
          value={image}
          onAlteration={value => setImage(value)}
          label="Imagem"
          placeholder="Digite o Endereço da Imagem"
        />
        <Dropdown
          value={team}
          onAlteration={value => setTeam(value)}
          label="Team"
          items={props.teams}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form
