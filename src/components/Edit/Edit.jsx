import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import EditContent from './EditContent'

export class Edit extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <EditContent/>
      </section>
    )
  }
}

export default Edit