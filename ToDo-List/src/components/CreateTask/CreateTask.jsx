import styles from './CreateTask.module.css'
import {PlusCircle} from 'phosphor-react'

export function CreateTask() {
  return(
    <div className={styles.container}>
      <input type="text"placeholder="Adicionar uma nova tarefa"/>
      <button>
        Criar
        <PlusCircle size={16}/>  
      </button>
    </div>
  )
}