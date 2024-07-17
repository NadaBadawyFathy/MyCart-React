import { Component } from "react";

class Cart extends Component {

    render() {


        return (
        <>
        <div className="my-carts">
        {
            // eslint-disable-next-line react/prop-types
            this.props.locationName.map((location,index) => (
                <div className="my-cart" key={index}>
                <div className="img">
                    <img className="w-100" src={location.url} alt="" />
                </div>
                
                <div className="content">
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
                    <p>{location.country}</p>
                    <p>{location.city}</p>
                </div>

                <div className="amount">
                    <span className="plus" 
                    onClick={()=> (
                        (document.querySelectorAll('.count-location')[index].innerHTML <10)?
                        (document.querySelectorAll('.count-location')[index].innerHTML = (+(document.querySelectorAll('.count-location')[index].innerHTML))+1):"")}>+</span>

                    <span className="count count-location">1</span>
                    
                    <span className="minus"
                    onClick={()=> (
                        (document.querySelectorAll('.count-location')[index].innerHTML > 1)?
                        (document.querySelectorAll('.count-location')[index].innerHTML = (+(document.querySelectorAll('.count-location')[index].innerHTML))-1):"")}>-</span>
                </div>

                {/* eslint-disable-next-line react/prop-types */}
                <i className="fa-solid fa-xmark fa-xl" onClick={()=> this.props.deleteLocation(index)}></i>
            </div>)
        )
        }
        </div>

        <div className="my-carts">
        {
            // eslint-disable-next-line react/prop-types
            this.props.productName.map((product,index) => (
                <div className="my-cart" key={index}>
                
                <div className="content">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                    <p>{product.stock}</p>
                </div>

                <div className="amount">
                    <span className="plus" 
                    onClick={()=> (
                        (document.querySelectorAll('.count-product')[index].innerHTML <10)?
                        (document.querySelectorAll('.count-product')[index].innerHTML = (+(document.querySelectorAll('.count-product')[index].innerHTML))+1):"")}>+</span>

                    <span className="count count-product">1</span>
                    
                    <span className="minus"
                    onClick={()=> (
                        (document.querySelectorAll('.count-product')[index].innerHTML > 1)?
                        (document.querySelectorAll('.count-product')[index].innerHTML = (+(document.querySelectorAll('.count-product')[index].innerHTML))-1):"")}>-</span>
                </div>

                {/* eslint-disable-next-line react/prop-types */}
                <i className="fa-solid fa-xmark fa-xl" onClick={()=> this.props.deleteProduct(index)}></i>
            </div>)
        )
        }
        </div>

        <div className="my-carts">
        {
            // eslint-disable-next-line react/prop-types
            this.props.personName.map((person,index) => (
                <div className="my-cart" key={index}>
                
                <div className="content">
                    <h3>{person.first_name} {person.last_name}</h3>
                    <p>{person.email}</p>
                    <p>{person.phone}</p>
                    <p>{person.address}</p>
                </div>

                <div className="amount">
                    <span className="plus" 
                    onClick={()=> (
                        (document.querySelectorAll('.count-person')[index].innerHTML <10)?
                        (document.querySelectorAll('.count-person')[index].innerHTML = (+(document.querySelectorAll('.count-person')[index].innerHTML))+1):"")}>+</span>

                    <span className="count count-person">1</span>
                    
                    <span className="minus"
                    onClick={()=> (
                        (document.querySelectorAll('.count-person')[index].innerHTML > 1)?
                        (document.querySelectorAll('.count-person')[index].innerHTML = (+(document.querySelectorAll('.count-person')[index].innerHTML))-1):"")}>-</span>
                </div>

                {/* eslint-disable-next-line react/prop-types */}
                <i className="fa-solid fa-xmark fa-xl" onClick={()=> this.props.deletePerson(index)}></i>
            </div>)
        )
        }
        </div>
        </>
        )
    }
}

export default Cart;