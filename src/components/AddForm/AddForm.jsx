import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import FormRequest from './FormRequest'



export class AddForm extends Component {
  render() {
    return (
      <section className="radial-bg flex-center">
        <NavBar />
        <FormRequest />
      </section>
    )
  }
}

export default AddForm