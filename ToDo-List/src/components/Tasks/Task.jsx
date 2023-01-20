import styles from './Task.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function Task(){
    return(
      <div className={styles.box}>
        <div className={styles.info}>
          <div className={styles.createdBox}>
            <span className={styles.created}>Tarefas criadas</span>
            <span className={styles.counterTask}>0</span>
          </div>
          <div className={styles.doneBox}>
            <span className={styles.done}>Concluídas</span> 
            <span className={styles.counterTask}>0</span>
          </div>
        </div>
        <div className={styles.content}>
          <img src={Clipboard} alt="aa" />
          <p> Você ainda não tem tarefas cadastradas <br></br>Crie tarefas e organize seus itens a fazer </p>
        </div>
      </div>
    )
}