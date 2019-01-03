import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state=({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      location: '',
      isVegan: false,
      isKosher: false,
      isPescatarian: false,
      isVegetarian: false
    })
  }

  handleChange = (e) => {
    const {name, value, type, checked} = e.target
    type === 'checkbox' ?
      this.setState({
        [name]: checked
      })
    :
      this.setState({
        [name] : value
      })
  }

  handleSubmit = (e) => {
    alert('submit')
    e.preventDefault()
  }

  render() {
    let formStyle = {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '90%',
      padding: '1em',
      dietaryRestrictions: ''
    }

    let buttonStyle = {
      maxWidth: '33.33333%',
      margin: '0 auto'
    }

    let headingStyle = {
      textTransform: 'capitalize'
    }

    let listStyle = {
      listStyle: 'none'
    }
    return (
      <div className="App">
        <header><h1>Travel Form</h1></header>
        <main>
          <section>
            <form
              onSubmit={this.handleSubmit}
              style={formStyle}
              >
              <label>First Name
                <input
                  name="firstName"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder={`First Name`}
                />
              </label>

              <label>Last Name
                <input
                  name="lastName"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder={`Last Name`}
                />
              </label>

              <label>Age
                <input
                  name="age"
                  type="number"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder={`Age`}
                />
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === `male`}
                  onChange={this.handleChange}
                /> Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === `female`}
                  onChange={this.handleChange}
                /> Female
              </label>

              <label>Location
                <select
                  defaultValue={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                >
                  <option value="Mars">Mars</option>
                  <option value="Jupiter">Jupiter</option>
                  <option value="Venus">Venus</option>
                </select>
              </label>

              <label>Dietary Restrictions</label>
              <ul style={listStyle}>
                <li>Kosher
                  <input
                    type="checkbox"
                    value="kosher"
                    name="kosher"
                    checked={this.state.isKosher}
                    onChange={this.handleChange}
                  />
                </li>
                <li>Vegetarian
                  <input
                    type="checkbox"
                    value="Vegetarian"
                    name="vegetarian"
                    checked={this.state.isVegetarian}
                    onChange={this.handleChange}
                  />
                </li>
                <li>Vegan
                  <input
                    type="checkbox"
                    value="Vegan"
                    name="vegan"
                    checked={this.state.isVegan}
                    onChange={this.handleChange}
                  />
                </li>
                <li>Pescatarian
                  <input
                    type="checkbox"
                    value="Pescatarian"
                    name="pescatarian"
                    checked={this.state.isPescatarian}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>
              {
                this.state.firstName !== '' ?
                <h2 style={headingStyle}>First name: {this.state.firstName}</h2>
                : null
              }
              {
                this.state.lastName !== '' ?
                <h2 style={headingStyle}>Last name: {this.state.lastName}</h2>
                : null
              }
              {
                this.state.age !== '' ?
                <h2 style={headingStyle}>Age: {this.state.age}</h2>
                : null
              }
              {
                this.state.gender !== '' ?
                <h2 style={headingStyle}>Gender: {this.state.gender}</h2>
                : null
              }
              {
                this.state.location !== '' ?
                <h2 style={headingStyle}>Location: {this.state.location}</h2>
                : null
              }
              {
                this.state.isKosher  ? <p>Kosher: Yes</p> : <p>Kosher: No</p>
              }
              {
                this.state.isVegan ? <p>Vegan: Yes</p> : <p>Vegan: No</p>
              }
              {
                this.state.isVegetarian ? <p>Vegetarian: Yes</p> : <p>Vegetarian: No</p>
              }
              {
                this.state.isPescatarian ? <p>Pescatarian: Yes</p> : <p>Pescatarian: No</p>
              }
              <button style={buttonStyle}>Submit</button>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
