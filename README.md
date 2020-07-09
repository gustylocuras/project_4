# :feet: AJ's Adoption Agency :feet:

![Image of app here](https:/)

### :computer: Creators:

- Agustin Alvarez
- Joshua Soave

## :information_source: About: :speech_balloon:

[AJ's Adoption Agency](https://sheltered-springs-99330.herokuapp.com/) is a single page web application that helps match users with the right pet for them. It also allows for animal shelters to post pets from their shelter online so they can find a forever home.

## :cat2: Features: :dog:

The user can:
- View pets for adoption
- Post pets for adoption
- Edit information about the pets

## :floppy_disk: Our Build:
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
- Coming up with a way to make the create form and show page look like two different pages even though it is all the same container. We achieved this by setting a state for show pets and a state for showing the create form. Then we put event listeners on the nav bar buttons that would toggle which page was showing. Finally, we used a ternary operator that would only show the home page with pets if the state was true by clicking on the home button.

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
- Initially figuring out how to work the JQuery from Materialize with React. It took us a lot of time and research to figure out because of how the DOM is rendered. Once we moved around the script tags we were able to get the functionality we wanted.
- Deploying to Heroku with the PHP and Postgres functionality. There are many different ways online on how to deploy and we weren't sure which guide to follow. What worked for us was to create an empty composer.json file and deploy to Heroku as normal. Remember to create a table in the pg:psql as well so your data will show up on the heroku app.
- Trying to implement a Materialize carousel for all of the pet images within the Pets.map on our render function. When we tried to solve it programatically using map none of the images would load. We found that hard coding it allows the images to show and be interacted with. However, this only allows for a specific number of images in the carousel and wont show more than 7 pets.

```HTML
<div className="carousel">

     <a className="carousel-item" href="#one!"><img src={images[0]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[1]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[2]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[3]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[4]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[5]} /> </a>
     <a className="carousel-item" href="#one!"><img src={images[6]} /> </a>

</div>
```

## :egg: :thought_balloon: Future Features:
