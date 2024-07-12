

import { Component } from "react";

import products from "./products.json";

import locations from "./locations.json";

import persons from "./persons.json";

import Cart from "./Cart";

class Parent extends Component {

    state = {
        products,
        locations,
        persons,
    }

    funcDelete = (id,index) => {
        // deep copy
        let products = [...this.state.products];
        let locations = [...this.state.locations];
        let persons = [...this.state.persons];

        // action
        products = products.filter((product) => product.id !== id);
        locations = locations.filter((location) => location.location_id !== id);
        persons = persons.filter((person) => person.id !== id);

        // update
        this.setState({
            products,
            locations,
            persons,
        });

        let countAmount = document.querySelectorAll('.count').length;
        for (let i = index; i < countAmount; i++) {
            document.querySelectorAll('.count')[i].innerHTML = (+(document.querySelectorAll('.count')[i+1].innerHTML));
        }
    }

    render() {

        return (
            <div>
                {
                    this.state.persons.map((person, index) => (
                        (index < 10)? (<Cart
                            key={index} 
                            index={index}
                            productName={this.state.products[index]}
                            locationName={this.state.locations[index]} 
                            personName={person} delete={this.funcDelete} 
                            />):''
                    ))
                }
            </div>
        )
    }
}

export default Parent;