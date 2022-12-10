import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Renderreview() {
    const [renderReview, setRenderReview] = useState([])
    const [data, setData] = useState({
      review: ""
  
    }) 

    useEffect(() => {
        axios.get('/reviews')
            .then(res => {
                console.log(res)
                setRenderReview(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    function submit(e){
        e.preventDefault();
        axios.post("/reviews",{
            review: data.review,
        })
        .then(res =>{
            console.log(res.data)
        })
    }

    function editReview(id){
       
        axios.put(`/reviews/${id}`,)
        .then(console.log(id))
    }

    function handleDelete(id) {
        axios.delete(`/reviews/${id}`,)
    }
      
      function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(data)
      }

      function handle2(id){
        const newdata={...renderReview}
        newdata[id.target.id] = id.target.value
        setData(newdata)
        console.log(renderReview)
      }

    return (
        <div className='card1'>

        <div>
            <form className='reviews' onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} id="review" defaultvalue={data.review} placeholder="review" type="text"></input>
                <button>submit review</button>
            </form>
        </div>


            <h2>reviews</h2>
            {renderReview.map((renderReview) => {
                return (
                    <div className='renderedreviews'>{renderReview.review}
                        <button
                            onClick={() => {
                                handleDelete(renderReview.id);
                            }}
                            key={renderReview.review}>
                            Delete
                        </button>

                        <form className='reviews' onSubmit={(id) => editReview(id)}>
                            <input onChange={(id)=>handle2(id)} id="review" defaultvalue={renderReview.review} placeholder="edit" type="text"></input>
                            
                            <button
                            onClick={() => {
                                editReview(renderReview.id);
                            }}
                            key={renderReview.review}>
                            edit
                        </button>
                        </form>
                    </div>
                )
            })}
        </div>
    )
}

export default Renderreview