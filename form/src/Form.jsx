import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Form",
      userName: "",
      email: "",
      age: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ userName: event.target.value });
  };

  // Validate Name
  validateName = () => {
    if (this.state.userName.length < 2) {
      alert("Name incorrect");
      // event.target.value = "";
    }
  };

  // js regex email - request to google
  validateEmail = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email
      )
    ) {
      alert("email is not valid");
    }
  };

  submitForm = (event) => {
    event.preventDefault();
  };
  render() {
    // Выводить, если есть value
    let p = "";
    if (this.state.title) {
      p = <h1>{this.state.title}</h1>;
    }
    ////////////////////////

    return (
      <div>
        {p}

        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="userName"
            placeholder="Your name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={this.handleChange}
            onBlur={this.validateEmail}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Your age"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
