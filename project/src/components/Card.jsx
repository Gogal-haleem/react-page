
import phoneicon from "./phone icon.png"
import emailicon from "./image.png"

export default function Card(props){
    console.log(props)
    return <div className="class-card">
       
        <article className="Card-Detials">

             <img className="catimage" src={props.img} alt="cat-image" alt="catimage"
             />

             <h3>{props.name}</h3>

             <div className="Group-info">

                 <img className="phoneicon" src={phoneicon} alt="phoneicon"
                  width="40px"/>
                <p className="phone">{props.phone}</p>
                 <img className="emailicon" src={emailicon} alt="emailicon"
                 width="30px"/>
                 <p className="email">{props.email}</p>

             </div>

       </article>
       

    </div>

}