import styles from './message.module.css';
import {useState,useEffect} from 'react';

function Message({msg,type}) {

    const[visible,Setvisible]= useState(false);

    useEffect(()=> {

        // se não possuir mensagem manter visible false 
        if(!msg){
            Setvisible(false)
        }
        //senão matenha visible true e mantenha um tempo de 3s após terminar esse tempo
        // faça visible false logo desaparecerá o true 
        Setvisible(true); 
        const Timer = setTimeout(()=>{
            Setvisible(false)
        },3000)
        return()=> clearTimeout(Timer);
    },[msg])

    //o use effect está condicionado ao [msg] 

    return ( 
        <>
              { visible && <div className={`${styles.message} ${styles[type]}`}>
                {msg} 
                </div>
                }
        </>
     );
}

export default Message ;