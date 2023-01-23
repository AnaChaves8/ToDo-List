import styles from "./Header.module.css";
import Logo from "../../assets/Layer2.svg";
import todo from "../../assets/todo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo ToDo" />
      <img className={styles.todo} src={todo} alt="Logo Todo" />
    </header>
  );
}
