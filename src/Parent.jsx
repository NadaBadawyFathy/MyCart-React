

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

    // Delete locations
    deleteItemLocation = (index) => {
        // deep copy
        let locations = [...this.state.locations];

        // action
        locations = locations.filter((location,indexItem) => indexItem !== index);

        // update
        this.setState({
            locations,
        });

        let countAmount = document.querySelectorAll('.count-location').length;
        for (let i = index; i < countAmount; i++) {
            document.querySelectorAll('.count-location')[i].innerHTML = (+(document.querySelectorAll('.count-location')[i+1].innerHTML));
        }
    }

    // Delete products
    deleteItemProduct = (index) => {
        // deep copy
        let products = [...this.state.products];

        // action
        products = products.filter((product,indexItem) => indexItem !== index);

        // update
        this.setState({
            products,
        });

        let countAmount = document.querySelectorAll('.count-product').length;
        for (let i = index; i < countAmount; i++) {
            document.querySelectorAll('.count-product')[i].innerHTML = (+(document.querySelectorAll('.count-product')[i+1].innerHTML));
        }
    }

    // Delete persons
    deleteItemPerson = (index) => {
        // deep copy
        let persons = [...this.state.persons];

        // action
        persons = persons.filter((person,indexItem) => indexItem !== index);

        // update
        this.setState({
            persons,
        });

        let countAmount = document.querySelectorAll('.count-person').length;
        for (let i = index; i < countAmount; i++) {
            document.querySelectorAll('.count-person')[i].innerHTML = (+(document.querySelectorAll('.count-person')[i+1].innerHTML));
        }
    }

    render() {

        return (
            <div>
                {
                    (<Cart productName={this.state.products} 
                        locationName={this.state.locations} 
                        personName={this.state.persons}
                        deleteLocation={this.deleteItemLocation}
                        deleteProduct={this.deleteItemProduct}
                        deletePerson={this.deleteItemPerson}
                        />)
                }
            </div>
        )
    }
}

export default Parent;