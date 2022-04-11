interface buttonprops {
    btntype:"button" |"reset" |"submit"
    btnlabel:string
}

export const ButtonComp:React.FC<buttonprops> = ({btntype,btnlabel}) =>{
    return  <button type={btntype}>{btnlabel}</button>
}