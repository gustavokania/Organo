import TextField from '../TextField'
import './Form.css'

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do Colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu Nome" />
        <TextField label="Cargo" placeholder="Digite seu Cargo" />
        <TextField label="Imagem" placeholder="Digite o Endereço da Imagem" />
      </form>
    </section>
  )
}

export default Form
