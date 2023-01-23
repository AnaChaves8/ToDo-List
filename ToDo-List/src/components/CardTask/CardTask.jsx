import styles from './CardTask.module.css'
import {CheckCircle, Trash} from 'phosphor-react'

export function CardTask({title,done, onDelete, onMarkAsCompleted}){

  return(
    <div className={styles.box}>
      <div className={styles.task}>
        <button  
          title='Selecionar task' 
          className={styles.checkBox}
          onClick={onMarkAsCompleted}
          >
          {done ? <CheckCircle/> : <div/>}
        </button>
          <p className={done ? styles.completed : ""}>{title}</p>
        <button  
          onClick={onDelete} 
          className={styles.trashBox} 
          title='Deletar task'> 
          <Trash size={24}/>
        </button>
        
      </div>
    </div>
  )
}