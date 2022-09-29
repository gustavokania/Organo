import Contributor from '../Contributor'
import './Team.css'

const Team = props => {
  return (
    props.contributors.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.colorSecondary }}
      >
        <h3 style={{ borderColor: props.colorPrimary }}>{props.name}</h3>
        <div className="contributors">
          {props.contributors.map(contributor => (
            <Contributor
              backgroundColor={props.colorPrimary}
              key={contributor.name}
              name={contributor.name}
              role={contributor.role}
              image={contributor.image}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Team
