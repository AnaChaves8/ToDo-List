import styles from './Empty.module.css'
import Clipboard from '../../assets/Clipboard.svg'

export function Empty() {
  return (
    <div className={styles.content}>
      <img src={Clipboard} alt="aa" />
      <p>
        {" "}
        Você ainda não tem tarefas cadastradas <br></br>Crie tarefas e organize
        seus itens a fazer{" "}
      </p>
    </div>
  );
}
