import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Form",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = (event) => {
    event.preventDefault();
  };
  render() {
    // Выводить, если есть value
    let p = "";
    if (this.state.userName) {
      p = <p>{this.state.userName}</p>;
    }
    ////////////////////////

    return (
      <div>
        <h1>{this.state.title}</h1>

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
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {p}
      </div>
    );
  }
}

export default Form;
