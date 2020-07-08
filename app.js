class App extends React.Component {
  state = {
    pets: []
  }

  componentDidMount = () => {
  axios.get('/pets').then((response) => {
    this.setState({
      pets: response.data

    })

  })
}

createPet = (event) => {
  event.preventDefault()
  axios.post('/pets',
{
  name: this.state.newPetName,
  image: this.state.newPetImage,
  description: this.state.newPetDescription
}).then(
    (response) => {
      this.setState({
        pets:response.data
      })
    }
  )
}

changeNewPetName = (event) => {
  this.setState({
    newPetName: event.target.value
  })
}

changeNewPetImage = (event) => {
  this.setState({
    newPetImage: event.target.value
  })
}

changeNewPetDescription = (event) => {
  this.setState({
    newPetDescription: event.target.value
  })
}


  render = () => {
    return <div className="container">
          <h2>Post Pet</h2>
            <form className="container"  onSubmit={this.createPet}>
              <input onKeyUp={this.changeNewPetName} type="text" placeholder="name"/><br/>
              <input onKeyUp={this.changeNewPetImage} type="text" placeholder="image url"/><br/>
              <input onKeyUp={this.changeNewPetDescription} type="text" placeholder="description"/><br/>
              <input type="submit" value="Post Pet"/>
            </form>
            <h2>Pets for adoption</h2>
            <div className="allPets">
            {this.state.pets.map((pet, i) => {
              return <Pets pets={pet} key={i}  />
            })}

            </div>
            </div>

  }
}

class Pets extends React.Component{
  state = {
    adopted: false
  }

  toggleShowPet = () => {
    this.setState({
      adopted: !this.state.adopted
    })
  }

  render = () => {
    return <div>{this.props.pets.name}</div>
  }
}
















ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
