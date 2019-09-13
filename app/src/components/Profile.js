import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getUser } from './UserFunctions'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    getUser(decoded.uid).then(res => {
      this.setState({
        name: res.data.name,
        phone: res.data.phone,
        email: res.data.email
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Nama</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>No. Handphone</td>
                <td>{this.state.phone}</td>
              </tr>
              <tr>
                <td>E-Mail</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile