import React from "react";
interface CardProps{
    UserId:number,
    id:number,
    title:String,
    body:string,

}

 const Interfaces:React.FC<CardProps>=({UserId,id,title,body})=>{
     return(
         <div className="card" >
            
                 <p>{UserId}</p>
                 <p>{id}</p>
                 <p>{title}</p>
                 <p>{body}</p>
            

         </div>
     )

}
export default Interfaces;