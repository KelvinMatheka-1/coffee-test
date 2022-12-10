import React, { useEffect, useState } from "react";



function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      // auto-login
      fetch("/coffees").then((res) => {
        if (res.ok) {
          res.json().then((data) => setData(data))
        }
      });
    }, [])
    console.log(data)

    


    return (
    <>
    <div className="box">
        <div className="projo">
        <h2 >Welcome to Coffee-cafe</h2>
        </div>
            <div className="projects">
             {data.map((data) =>{
              return(
                <div className="card">
                    <img className="avatar" src={data.coffee_image} alt="coffee"></img>
                    <div className="card-content">
                        <h4><b>{data.coffee_name}</b></h4>
                        <p id="desc">{data.description}</p>
                        <p className="price">{data.price}</p>
                        {/* <p>{data.category}</p> */}
                        <button onClick={() => ({})} className="btn1" id="btn1">Add to Cart</button>
                    </div>
                </div>
                )
            })}
            </div>    
    </div>

    </>

       
    )
}



export default Home;