import styles from './Input.module.css'


function input({type,text, name,placeholder,handleOnChange, value}) {
    return (  
        <div className={styles.form_control}>
            <label htmlFor={name}> {text} </label>
            <input type={type} 
            name={name} id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            value={value}/>      
        </div>
    );
}

export default input;


//Um elemento HTML <label> representa uma legenda para um item em 
//uma interface de usuário. Ele pode estar associado com um 
//elemento de controle, colocando este dentro do elemento label, ou usando o atributo for. 
//Tal controle é chamado o controle etiquetado do elemento etiqueta. 
//Um input pode ser associado a diversas etiquetas (<label>s).