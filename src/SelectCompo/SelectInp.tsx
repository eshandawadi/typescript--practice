interface Iselectprops {
    id :string,
   className :string
   
}
interface Ioptionprops {
    value: string,
    label :string,
    className:string
    
}
interface Icombo {
    seleted :Iselectprops,
    optioned :Ioptionprops[]
}


export const SelectInp:React.FunctionComponent<Icombo> = ({seleted,optioned}) =>{
    return <div>
        <select {...seleted}> 
        
            {optioned.map((val)=>{
                return <option {...val.value} {...val.className}>{val.label}</option>
            })}
        </select>
    </div>
}