import styles from './Select.module.css'


function Select({text, name, options,handleOnChange, value}) {
   
   
    return (  
        <div className={styles.form_control}>
            <label htmlFor={name}> {text} </label>
            <select name={name} id={name} value={value || ""} onChange={handleOnChange} > 
                
                <option>SELECT THE OPTION </option>
                
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ) )}
            </select>      
        </div>
    );
} 

export default Select;