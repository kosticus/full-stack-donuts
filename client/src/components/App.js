import React, { Component } from "react";
// import exampleDonutData from "../exampleDonuts";
// ^^ We no longer need this, as we have REAL data!

// Step 1: Render dummy data - DONE
// Step 2: Render dummy data dynamically - DONE
// Step 3: Fetch real data (donuts) from the server - DONE
// Step 4: Render real data (yay) - DONE

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: "Hello HRATX51!!!!!",
      donutData: []
    };

    this.getDonuts = this.getDonuts.bind(this);
  }
  
  componentDidMount() {
    this.getDonuts();
  }

  getDonuts() {
    // localhost:4000/api/donuts
    fetch('/api/donuts')
      .then(response => response.json())
      .then(data => {
        this.setState({ donutData: data });
      })
      .catch(err => {
        console.error('Oh no!', err);
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <table>
          <tbody>
            <tr>
              <th scope="col">Donut Id</th>
              <th scope="col">Type</th>
              <th scope="col">Dough Flavor</th>
              <th scope="col">Glazed</th>
              <th scope="col">Glaze Flavor</th>
            </tr>
            {/* DonutsList component - donuts list*/}
            {/* Donut component - donut */}
            {
              this.state.donutData.map(donut => {
                return (
                  <tr key={donut.id}>
                    <th scope="row">{donut.id}</th>
                    <td>{donut.type}</td>
                    <td>{donut.doughFlavor}</td>
                    <td>{donut.glazed ? 'TRUE' : 'FALSE'}</td>
                    <td>{donut.glazeFlavor}</td>
                  </tr> 
                )
              })
            }
            {/* <tr>
              <th>{this.state.donutData[0].id}</th>
              <td>{this.state.donutData[0].type}</td>
              <td>{this.state.donutData[0].doughFlavor}</td>
              <td>{this.state.donutData[0].glazed ? 'TRUE' : 'FALSE'}</td>
              <td>{this.state.donutData[0].glazeFlavor}</td>
            </tr> */}
            {/* <tr>
              <th>{this.state.donutData[1].id}</th>
              <td>{this.state.donutData[1].type}</td>
              <td>{this.state.donutData[1].doughFlavor}</td>
              <td>{this.state.donutData[1].glazed ? 'TRUE' : 'FALSE'}</td>
              <td>{this.state.donutData[1].glazeFlavor}</td>
            </tr> */}
            {/* <tr>
              <th>{this.state.donutData[2].id}</th>
              <td>{this.state.donutData[2].type}</td>
              <td>{this.state.donutData[2].doughFlavor}</td>
              <td>{this.state.donutData[2].glazed ? 'TRUE' : 'FALSE'}</td>
              <td>{this.state.donutData[2].glazeFlavor}</td>
            </tr> */}
            {/* ^^ Not great, as it is all hardcoded */}
          </tbody>
        </table>
      </div>
    );
  }
}
