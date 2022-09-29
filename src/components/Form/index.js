import Button from '../Button'
import Dropdown from '../Dropdown'
import TextField from '../TextField'
import './Form.css'

const Form = () => {
  const teams = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  const onSave = event => {
    event.preventDefault()
    console.log('Form Submetido')
  }
  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>PREENCHA OS DADOS PARA CRIAR O CARD DO COLABORADOR</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu Nome" />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
        />
        <TextField label="Imagem" placeholder="Digite o Endereço da Imagem" />
        <Dropdown label="Team" items={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form
