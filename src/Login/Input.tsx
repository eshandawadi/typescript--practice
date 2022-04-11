interface IlabelProps {
    label :string;
}

interface Inputprops{
    type:string;
    name:string;
    classname ?:string;
    placeholder:string
}



interface combo {
    labp :IlabelProps;
    inp:Inputprops

}

export const Input:React.FC<combo> =({labp,inp}) =>{
    return <div >
        <form>
        <label htmlFor={labp.label}>{labp.label}</label>
        <input type={inp.type} name={inp.name} className={inp.classname} placeholder={inp.placeholder}/>
            
       
        </form>
    </div>
}