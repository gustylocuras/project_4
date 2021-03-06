class App extends React.Component {
  state = {
    pets: [],
    homePageShow: true,
    createFormShow: false,
  }

  componentDidMount = () => {
  axios.get('/pets').then((response) => {
    this.setState({
      pets: response.data

    })

  })
}


//DELETE PET

deletePet = (event) => {
  console.log(event.target.value);
  axios.delete('/pets/' + event.target.value).then(
    (response) => {
      console.log(response);
      this.setState({
        pets: response.data
      })
    }
  )
}

//UPDATE PET INFO

updatePet = (event) => {
  event.preventDefault()
  const id = event.target.getAttribute('id')
  axios.put('/pets/' + id,
    {
      name: this.state.updatedPetName,
      image: this.state.updatedPetImage,
      description: this.state.updatedPetDescription
    }).then(
      (response) => {
        this.setState({
          pets: response.data
        })
      }
    )
}

//UPDATE FROM VALUES

changeUpdatedPetName = (event) => {
  this.setState({
    updatedPetName: event.target.value
  })
}

changeUpdatedPetImage = (event) => {
  this.setState({
    updatedPetImage: event.target.value
  })
}

changeUpdatedPetDescription = (event) => {
  this.setState({
    updatedPetDescription: event.target.value
  })
}


//CREATE PET
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
        pets:response.data,
        homePageShow: true,
        createFormShow: false
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

toggleCreateForm = () => {
  this.setState({
    createFormShow: true,
    homePageShow: false
  })
}

toggleHomePage = () => {
  this.setState({
    homePageShow: true,
    createFormShow: false
  })
}


  render = () => {
     let images = []
    for(let pet of this.state.pets){
      images.push(pet.image);
    }
    return <div>

    <nav className="nav-bar">
      <div className="nav-wrapper">
        <a className="brand-logo">AJ's Adoption Agency</a>
        <a href="" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="hide-on-med-and-down">
        <i  onClick={this.toggleHomePage} className="material-icons right navigation">home</i>
        <i  onClick={this.toggleCreateForm} className="material-icons right navigation">pets</i>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a className="waves-effect waves-light btn teal lighten-2" onClick={this.toggleHomePage}>Home</a></li>
          <li><a className="waves-effect waves-light btn teal lighten-2" onClick={this.toggleCreateForm}>Post adoption</a></li>
        </ul>
      </div>
    </nav>

    <div className="container">
        { this.state.createFormShow ? (
        <div>
          <div className="create-form">

          <h2 className="center">Post Pet</h2>
            <form className="form container"  onSubmit={this.createPet}>
              <input onKeyUp={this.changeNewPetName} type="text" placeholder="name"/><br/>
              <input onKeyUp={this.changeNewPetImage} type="text" placeholder="image url"/><br/>
              <input onKeyUp={this.changeNewPetDescription} type="text" placeholder="description"/><br/>
              <input className="btn-floating btn-large waves-effect waves-light orange darken-3" type="submit" value="+"/>
            </form>
          </div>
          <div className="carousel">

               <a className="carousel-item" href="#one!"><img src={images[0]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[1]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[2]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[3]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[4]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[5]} /> </a>
               <a className="carousel-item" href="#one!"><img src={images[6]} /> </a>

          </div>

        </div>
          ) : " "
        }

        { this.state.homePageShow ? (


            <div className="allPets container">
              <h2 className="center">Pets for adoption</h2>
            {this.state.pets.map((pet, i) => {
              return  <Pets
                        pet={pet} key={i}
                        deletePet={this.deletePet}
                        updatePet={this.updatePet}
                        changeUpdatedPetName ={this.changeUpdatedPetName}
                        changeUpdatedPetImage={this.changeUpdatedPetImage}
                        changeUpdatedPetDescription={this.changeUpdatedPetDescription}
                      />
            })}

            </div>
          ) : ""
        }
            </div>
          </div>
  }
}

class Pets extends React.Component{
  state = {
    show: false
  }

  toggleShowForm = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render = () => {
    const { pet } = this.props
    return <div className="pet container">
              <h3>{pet.name}</h3>
              <img src={pet.image} />
              <p>{pet.description}</p>
              {(this.state.show) ?
          <form className="form" id={pet.id} onSubmit={this.props.updatePet}>
              <input onKeyUp={this.props.changeUpdatedPetName} type="text"placeholder="name"/><br/>
              <input onKeyUp={this.props.changeUpdatedPetImage} type="text"placeholder="image"/><br/>
              <input onKeyUp={this.props.changeUpdatedPetDescription} type="text"placeholder="body"/><br/>
                <input className="btn-floating btn waves-effect waves-light orange darken-3" type="submit" value="+"/><br/>
            </form>
          : "" }
          <div className="pet-buttons">
              <button className="btn" onClick={this.props.deletePet} value={pet.id}>ADOPT</button>
              <button className="btn" onClick={this.toggleShowForm}>EDIT</button>
          </div>
      </div>
  }
}
















ReactDOM.render(
  <App></App>,
  document.querySelector('main')
)
