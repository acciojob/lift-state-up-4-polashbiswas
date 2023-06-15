import React from "react";


const Child = ({ showlist, setlist }) => {

    function handelRemove(index){
        const newData = [...showlist];
        newData.splice(index, 1);
        setlist(newData);
    }


    return (
        <div className="child">
            <h2>Child Component</h2>
            <ul>
                {
                    showlist &&
                    showlist.map((data, index) => (
                        <li className="child li" key={index}>{data}
                        <button onClick={()=>handelRemove(index)}>Remove</button>
                        </li>
                        
                    ))
                }
            </ul>
        </div>
    )
}

export default Child;