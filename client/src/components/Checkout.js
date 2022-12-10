import image1 from "../images/image1.jpg"
import coffee from "../images/cofee.jpeg"
import phone from "../images/phone.png"
import email from "../images/email.png"
import Renderreview from "./Renderreview";

function Checkout() {
    return (
        <>
         <div className="section">
       <div className="photo">
           <img className="dp" src={image1} alt="coffee"></img>
           <div className="info">
               <h3>Coffee:</h3>
               <p>Price:</p>
               <p>Category:</p>
               <div className="check-out-btn">
                   {/* <button className="add">AddToCart</button> */}
                   <button className="delete">ClearCart</button>
               </div>
           </div>
       </div>
   </div>

   <div className="box">

           <div className="projects">
               <div className="card">
                   <img className="coffee" src={coffee} alt="coffee"></img>
                   <div className="container">
                       <h4><b>About Us</b></h4>
                       <p>Café Coffee Restaurant was founded in the year 2007
                            with the key desire to appreciate our motherland
                             by fashioning her indegenous cuisines. through
                              this we also provide global cuisines with a 
                              Kenyan touch. Therefore, our mission is to be
                               the destination for kenyan cuisine and international cuisine.</p>
                   </div>
               </div>
               <div className="card">
                   <div className="container">
                       <h4><b>Contact-Us</b></h4>
                       <img classname="icon" src={phone} alt="phone"></img>
                       <p>+254 789 456</p>
                       <img classname="icon" src={email} alt="email"></img>
                       <p>cafecofee@gmail.com</p>
                       
                   </div>
               </div>
           </div>
       </div>
    
    < Renderreview />
        </>

    )
}


export default Checkout;