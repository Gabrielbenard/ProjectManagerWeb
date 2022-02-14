import style from "./SubmitButton.module.css"


function SubmitButton({text}) {
    return (  
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    );
}

export default SubmitButton
