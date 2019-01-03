import React from 'react'

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

export default function FormComponent(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      style={formStyle}
      >
      <label>First Name
        <input
          name="firstName"
          type="text"
          value={props.data.value}
          onChange={props.handleChange}
          placeholder={`First Name`}
        />
      </label>

      <label>Last Name
        <input
          name="lastName"
          type="text"
          value={props.data.value}
          onChange={props.handleChange}
          placeholder={`Last Name`}
        />
      </label>

      <label>Age
        <input
          name="age"
          type="number"
          value={props.data.value}
          onChange={props.handleChange}
          placeholder={`Age`}
        />
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.data.gender === `male`}
          onChange={props.handleChange}
        /> Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.data.gender === `female`}
          onChange={props.handleChange}
        /> Female
      </label>

      <label>Location
        <select
          defaultValue={props.data.location}
          onChange={props.handleChange}
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
            checked={props.data.isKosher}
            onChange={props.handleChange}
          />
        </li>
        <li>Vegetarian
          <input
            type="checkbox"
            value="Vegetarian"
            name="vegetarian"
            checked={props.data.isVegetarian}
            onChange={props.handleChange}
          />
        </li>
        <li>Vegan
          <input
            type="checkbox"
            value="Vegan"
            name="vegan"
            checked={props.data.isVegan}
            onChange={props.handleChange}
          />
        </li>
        <li>Pescatarian
          <input
            type="checkbox"
            value="Pescatarian"
            name="pescatarian"
            checked={props.data.isPescatarian}
            onChange={props.handleChange}
          />
        </li>
      </ul>
      {
        props.data.firstName !== '' ?
        <h2 style={headingStyle}>First name: {props.data.firstName}</h2>
        : null
      }
      {
        props.data.lastName !== '' ?
        <h2 style={headingStyle}>Last name: {props.data.lastName}</h2>
        : null
      }
      {
        props.data.age !== '' ?
        <h2 style={headingStyle}>Age: {props.data.age}</h2>
        : null
      }
      {
        props.data.gender !== '' ?
        <h2 style={headingStyle}>Gender: {props.data.gender}</h2>
        : null
      }
      {
        props.data.location !== '' ?
        <h2 style={headingStyle}>Location: {props.data.location}</h2>
        : null
      }
      {
        props.data.isKosher  ? <p>Kosher: Yes</p> : <p>Kosher: No</p>
      }
      {
        props.data.isVegan ? <p>Vegan: Yes</p> : <p>Vegan: No</p>
      }
      {
        props.data.isVegetarian ? <p>Vegetarian: Yes</p> : <p>Vegetarian: No</p>
      }
      {
        props.data.isPescatarian ? <p>Pescatarian: Yes</p> : <p>Pescatarian: No</p>
      }
      <button style={buttonStyle}>Submit</button>
    </form>
  )
}
