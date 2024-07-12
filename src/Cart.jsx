import { Component } from "react";

class Cart extends Component {

    render() {

        let {name,category,description,price,id} = this.props.productName;
        let {url} = this.props.locationName;
        let {first_name} = this.props.personName;
        let index = this.props.index;

        return (
            <div className="my-cart">
                <div className="img">
                    <img className="w-100" src={url} alt="" />
                </div>

                <div className="desc">
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{first_name}</p>
                </div>

                <div className="amount">
                    <span className="plus" 
                    onClick={()=> (
                        (document.querySelectorAll('.count')[index].innerHTML <10)?
                        (document.querySelectorAll('.count')[index].innerHTML = (+(document.querySelectorAll('.count')[index].innerHTML))+1):"")}>+</span>

                    <span className="count">1</span>
                    
                    <span className="minus"
                    onClick={()=> (
                        (document.querySelectorAll('.count')[index].innerHTML > 1)?
                        (document.querySelectorAll('.count')[index].innerHTML = (+(document.querySelectorAll('.count')[index].innerHTML))-1):"")}>-</span>
                </div>

                <div className="price">
                    <h4>{price}$</h4>
                </div>
                <i className="fa-solid fa-xmark fa-xl" onClick={()=> this.props.delete(id,index)}></i>
            </div>
        )
    }
}

export default Cart;