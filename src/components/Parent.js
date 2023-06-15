import React, { useState } from "react";
import Child from "./Child";


const Parent = () => {

    let [cartItems, setCartItems] = useState("");
    let [cartPrice, setCartPrice] = useState("");
    let [showData, setShowData] = useState([]);

    function handelForm(e) {
        e.preventDefault();

        setShowData([...showData, `${cartItems} - $${cartPrice}`]);
        setCartItems("");
        setCartPrice("");
    }
    // console.log(arr);
    // console.log(showData);


    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <form>
                <label htmlFor="itemName">Item Name</label>
                <input
                    type="text"
                    id="itemName"
                    onChange={(e) => setCartItems(e.target.value)}
                    value={cartItems}
                />

                <label htmlFor="itemPrice">Item Price</label>
                <input type="number"
                    id="itemPrice"
                    onChange={(e) => setCartPrice(e.target.value)}
                    value={cartPrice}
                />

                <button onClick={handelForm}>Add Item</button>
            </form>

            <Child showlist={showData} setlist={setShowData} />
        </div>
    )
}

export default Parent;