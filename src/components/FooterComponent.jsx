import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <nav>
            <div>All right reserved &copy; Marcin Dubinski </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
