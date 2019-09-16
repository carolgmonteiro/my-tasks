import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="./" className="text-white">
          {this.props.title}
        </a>
      </nav>
    );
  }
}
export default Navigation;
