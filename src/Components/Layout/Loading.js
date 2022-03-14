import Styles from './Loading.module.css'
import loading from 'C:/Users/gabri/Documents/CURSO DE REACTJS/costs/src/img/Gear-0.2s-200px.svg'

function Loading() {
    return (  
        <div className={Styles.loader_container}>
            <img src = {loading} alt="loading"/>
        </div>
    );
}

export default Loading;