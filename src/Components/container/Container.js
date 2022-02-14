import styles from './container.modules.css'


function container(props){

    return(
        <div className="container"> {props.children} </div>
    )
}

export default container