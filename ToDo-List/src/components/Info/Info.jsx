import styles from './Info.module.css'

export function Info({counter, completedTask}) {
  
  return (
    <div className={styles.info}>
      <div className={styles.createdBox}>
        <span className={styles.created}>Tarefas criadas</span>
        <span className={styles.counterTask}>{counter}</span>
      </div>
      <div className={styles.doneBox}>
        <span className={styles.done}>Concluídas</span>
        <div className={styles.counter}>
          <p>{completedTask}</p>
          <p>de</p>
          <p>{counter}</p>
        </div>
        
      </div>
    </div>
  );
}
