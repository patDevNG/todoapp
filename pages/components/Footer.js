import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className = "footer bg-primary">
            <h5 className="text-center text-light">Copyright <i className="fa fa-copyright" aria-hidden="true"></i> Patrick Okuns </h5>
        </footer>
      </div>
    )
  }
}

export default Footer
