import './Team.css'

const Team = props => {
  return (
    <section className="team" style={{ backgroundColor: props.colorSecondary }}>
      <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
    </section>
  )
}

export default Team
