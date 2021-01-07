import React, { Component } from "react";
// import exampleDonutData from "../exampleDonuts";

// componentDidMount
// Get the real data AJAX
// Add the real data to state -- rerender

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello HRATX53",
      donutData: [],
      inputDonutId: ''
    };

    this.handleDonutIdChange = this.handleDonutIdChange.bind(this);
    this.handleDonutIdSubmit = this.handleDonutIdSubmit.bind(this);
  }

  componentDidMount() {
    // make a GET request
    this.getAllDonuts();
    // this.getOneDonut(4);
    // race condition
  }

  getAllDonuts() {
    // axios
    // fetch
    // jQuery
    /// AJAX
    fetch('/api/donuts')
      .then(response => response.json())
      .then(donutArray => {
        // set to a state property -- donutData
        this.setState({ donutData: donutArray });
        // console.log('what is this data', this.state);
      })
      .catch(error => {
        console.error('Error fetching the donuts', error);
      });
  }

  getOneDonut() {
    const donutId = this.state.inputDonutId;
    fetch(`/api/donuts/${donutId}`)
      .then(response => response.json())
      .then(donut => {
        console.log('what is this thing', donut);
      })
      .catch(error => {
        console.error('Error fetching the one donut', error);
      });
  }

  handleDonutIdChange(event) {
    this.setState({ inputDonutId: event.target.value });
  }

  handleDonutIdSubmit(event) {
    event.preventDefault();
    // const donutInput = this.state.inputDonutId;
    // console.log('what is in our submit?', donutInput);
    this.getOneDonut();
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <form onSubmit={this.handleDonutIdSubmit}>
          <label>Which donut would you like to see?</label>
          <input
            type="text"
            value={this.state.inputDonutId}
            onChange={this.handleDonutIdChange}
          ></input>
          <input type="submit" value="Submit" />
        </form>
        <table>
          <thead>
            <tr>
              <th>Donut Id</th>
              <th>Flavor</th>
              <th>Glazed</th>
              <th>Type</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {this.state.donutData.map((donut) => {
              /*
              if (conditionA) {
                // codeA
              } else {
                // codeB
              }
              (conditionA) ? codeA : codeB
               if glazed true => YES
               other => NO 
               */
              return (
                <tr key={donut.id}>
                  <th scope="row">{donut.id}</th>
                  <td>{donut.type}</td>
                  <td>{donut.glazed ? 'YES' : 'NO'}</td>
                  {/* <td>{donut.glazed.toString()}</td> */}
                  <td>{donut.flavor}</td>
                  <td>{donut.calories}</td>
                </tr>
              )
            })}
            {/* <tr>
              <th scope="row">1</th>
              <td>Regular</td>
              <td>TRUE</td>
              <td>Regular</td>
              <td>300</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Lemon</td>
              <td>FALSE</td>
              <td>Regular</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Strawberry</td>
              <td>TRUE</td>
              <td>Maple</td>
              <td>500</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}