import Select from "react-select";
import photo1 from '../dropdown Menu/nepalflag.png'
import photo2 from '../dropdown Menu/russia.png'

interface OptionProps{
    label:string;
    value:string;
    Image:string;
}




const Option:OptionProps[] =[
{
    label:'nepal',value:'cdf',Image:photo1

},
{
    label:'russia',value:'cdf',Image:photo2

},
{
    label:'nepal',value:'cdf',Image:photo1

}
]



const Format:React.FC<OptionProps>=({label,Image})=>(
<div>
          <p>{label}</p>
          <img src={Image}/>
      </div>


)
export const  Dropdown:React.FC =()=>{
    return(
        <Select
            formatOptionLabel={Format}
            options={Option}
        />
      
    )
}
