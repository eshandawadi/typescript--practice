import React from 'react';
interface inputProps1{
    text?:string;
    placeholder:string;
    className:string;
    style?:object;
    label:string;
}

interface labelProps  {
    
    label:string;
}
interface Props{
    InputProps:inputProps1;
LabelProps:labelProps

}
export const Header:React.FC<Props>=({InputProps,LabelProps})=>{
    return(
        <div>
   <input{...InputProps} />
 
        </div>

    );

}

export default Header;