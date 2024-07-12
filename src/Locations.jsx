import { Component } from "react";

import locations from "./locations.json";

import Cart from "./Cart";

class Locations extends Component {
    render() {
        return (
            <div>
                {
                    locations.map(function (location) {
                        <Cart locationName={location}> </Cart>
                    })
                }
            </div>
        );
    }
}

export default Locations;