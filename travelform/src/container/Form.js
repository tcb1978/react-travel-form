import React, {Component} from 'react'
import FormComponent from '../component/FormComponent'

class Form extends Component {
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

    return (
      <div className="Form">
        <header><h1>Travel Form</h1></header>
        <main>
          <section>
            <FormComponent
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              data={this.state}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default Form;
