import styles from './container.module.css'


function container(props,{customClass}){

    return(
        <div className={styles.column}> {props.children} </div>
    )
}

export default container