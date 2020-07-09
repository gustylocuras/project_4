# :feet: AJ's Adoption Agency :feet:

![Image of app here](https:/)

### :computer: Creators:

- Agustin Alvarez
- Joshua Soave

## :information_source: About:

[AJ's Adoption Agency](https://sheltered-springs-99330.herokuapp.com/) is a single page web application that helps match users with the right pet for them. It also allows for animal shelters to post pets from their shelter online so they can find a forever home.

## :cat2: Features:

The user can:
- View pets for adoption
- Post pets for adoption
- Edit information about the pets

## :floppy_disk: :octocat: Our Build:
### Languages
- HTML5
- CSS3
- Javascript
- PHP
### Technologies
- Postgres
- React
- Materialize
- JQuery
- Heroku
- MAMP

## :clipboard: :calendar: Our Timeline:
| Day           | Tasks         |
| ------------- |:-------------:|
| Wed 7/8    | Idea, Heroku setup, PHP Backend, React Frontend, Styling Nav |
| Thur 7/9      | Finalized styling and READ.me      |

## :hatching_chick: Installation Instructions:
- Visit our [repository](https://github.com/gustylocuras/project_4)
- Clone or download the repo
- Open the project in terminal and your text editor
- Run MAMP or another server in the directory of the repo
- Run Postgres
- Enter in the table.sql commands into your Postgres shell
- Leave Postgres running
- Start Coding!

## :heart_eyes_cat: Wins:
- We made the PHP Backend and React Frontend work together seamlessly. It helped that we divided up the work and one of us tacked the backend while the other worked on frontend. We communicated well to ensure our routes would interact with each other correctly.
- We were able to get Materialize working with React frontend by changing placement of some of our script tags. In order to have the mobile sidebar nav, Materialize uses JQuery. We came up with a separate file that runs after everything is loaded to give the sidebar nav that functionality.
- Figuring out how to toggle the edit form show on the page that displays pets for adoption. We created a state in our pet component and gave it to each pet through map. This allowed us to toggle the edit form for each specific pet instead of toggling them all at once.
- Coming up with a way to make the create form and show page look like two different pages even though it is all the same container. We achieved this by setting a state for show pets and a state for showing the create form. Then we put event listeners on the nav bar buttons that would toggle which page was showing.
```Javascript
{ this.state.homePageShow ? (

    <div className="allPets">
      <h2>Pets for adoption</h2>
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
```

## :scream_cat: Struggles:
