import './MainBody.css'

function MainBody(props) {
  return (
    <div className="main-body">
      <ul className="user-info">
        <li>Name: {props.name}</li>
        <li>Age: {props.age}</li>
        <li>Nationality: {props.nationality}</li>
      </ul>
    </div>
  )
}

export default MainBody