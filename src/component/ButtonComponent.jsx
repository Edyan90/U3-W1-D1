// un componente React deve SEMPRE chiamarsi con la lettera maiuscola! sia dentro che fuori dal file.
// un componente dovrà essere SEMPRE:

// - ✅ esportato
// - ✅ avere un return
// - ✅ avere un singolo elemento JSX ritornato!

const ButtonComponent=props=>{
    return(
        <button type={props.type} className={props.classes}>{props.text}</button>
    )
}


export default ButtonComponent