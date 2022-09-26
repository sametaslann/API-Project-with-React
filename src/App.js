import React from "react";
import './App.css';
import { v4 as uuid } from 'uuid';
import background from "./img/resim.png";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  count = 0;
  people = [];
	// Constructor
	constructor(props) {
		super(props);
    
		this.state = {
			items: [],
			DataisLoaded: false,
		};
    console.log("first")

	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {

    console.log('Interval')

    setInterval(() => {
      fetch(
        "https://randomuser.me/api/")
        
              .then((res) => res.json())
              .then((json) => {
                this.setState({
                  items: json,
                  DataisLoaded: true
                });
              })
    }, 5000)

		
	}
	render() {
    
    console.log('Render')
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded){ return <div>
			<h1> Please wait some time.... </h1> </div> ;
    }
    else if (items.results[0].location.country === 'Turkey') {
      console.log('Turkey')
      this.state.lastTurk = items.results[0].name.first
    }

    
    
    this.people[this.count] = items;
    console.log(this.people)
    ++this.count;
    
    
    
		return (
		<div style={{height: 200}}>
        <table>
          <thead>
            <tr >
              <th className="h1Css" scope="col">Name</th>
              <th className="h1Css" scope="col">Surname </th>
              <th className="h1Css" scope="col">Age</th>
              <th className="h1Css" scope="col">Country</th>
              <th className="h1Css" scope="col">Email</th>
              <th className="h1Css" scope="col">Phone</th>
            </tr>
          </thead>
          
            {this.people.slice(0).reverse().map(person =>
               <tbody >
                <td className="h2Css" >{person.results[0].name.first}</td>
                <td className="h2Css">{person.results[0].name.last}</td>
                <td className="h2Css" >{person.results[0].dob.age}</td>
                <td className="h2Css" >{person.results[0].location.country}</td>
                <td className="h2Css" >{person.results[0].email}</td>
                <td className="h2Css" >{person.results[0].phone}</td>
                </tbody>
               )}
          
            {/* <tr className="table table-striped">
              <td >{items.results[0].name.first}</td>
              <td >{items.results[0].name.last}</td>
              <td >{items.results[0].dob.age}</td>
              <td >{items.results[0].location.country}</td>
              <td >{items.results[0].email}</td>
              <td >{items.results[0].phone}</td>
            </tr> */}
          
        </table>

			  {/* <h1 className="h1Css"> Çalışan Listesi </h1>
        <h2 style={{ color: "red" }} >İsim : {items.results[0].name.first}</h2>
        <h2>Sokak : {items.results[0].location.street.name}</h2>
        <h2>Şehir : {items.results[0].location.city}</h2>
        <h2 style={{ color: "blue" }} >Ülke : {items.results[0].location.country}</h2>
        <h2>Mail : {items.results[0].email}</h2>
        <h2>Enlem : {items.results[0].location.coordinates.latitude}</h2>
        <h2>Boylam : {items.results[0].location.coordinates.longitude}</h2>
        <h1>Unique ID</h1>
        <p className="font-link"> merhaba {unique_id}</p>
        <h2>Last Turk: {this.state.lastTurk}</h2>
        <h2>Number of Counted Person: {this.state.count}</h2>
        <h2>Mail : {items.results[0].email}</h2>
        <h2>Enlem : {items.results[0].location.coordinates.latitude}</h2>
        <h2>Boylam : {items.results[0].location.coordinates.longitude}</h2> */}

		</div>
	);
}
}

export default App;
