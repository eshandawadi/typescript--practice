

import React from 'react';
import { SelectInp } from './SelectCompo/SelectInp';



interface inputProps{
   text?:string;
   placeholder:string;
   className:string;
   style?:object;

}
interface master{
    className:string
}
interface imgProps{
    src:string;
    className:string;
    style?:object;
}

interface logoProps{
    className:string;
}

interface Props{
InputProps:inputProps;
ImgProps:imgProps;
Master:master;
LogoProps:logoProps;
}


 export const InputField:React.FC<Props >= ({InputProps,ImgProps,Master,LogoProps}) => {
    const optionValues = [
        {
          value :"java",
          label :"java",
          className :"abcd"
          
        },
        {
         value :"c++",
         label :"c++",
         className : "abcd"

       },
      ]
    return (
        <div {...Master}>
            <img {...ImgProps}/>
            <input {...InputProps}/>
            <i {...LogoProps}/>
            <SelectInp seleted={{id:"selected-id",className:"abcd"}} optioned={optionValues}/>
        </div>
    );
};

export default InputField;