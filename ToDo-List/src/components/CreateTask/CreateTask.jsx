import styles from "./CreateTask.module.css";
import { useState, useCallback } from "react";
import { CardTask } from "../CardTask/CardTask";
import { Info } from "../Info/Info";
import { Empty } from "../Empty/Empty";

export function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const counter = tasks.length;
  const completedTask = tasks.filter((task) => task.done).length;

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleMarkAsCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const handleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = useCallback(() => {
    const newTask = {
      id: new Date().valueOf(),
      title: taskTitle,
      done: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTaskTitle("");
  }, [taskTitle, setTasks]);

  return (
    <div>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Adicionar uma nova tarefa"
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Criar</button>
      </div>
      <div className={styles.taskContainer}>
        <Info counter={counter} completedTask={completedTask} />

        {counter === 0 ? (
          <Empty />
        ) : (
          tasks.map((task) => (
            <CardTask
              key={task.id}
              title={task.title}
              done={task.done}
              onDelete={() => handleDeleteTask(task.id)}
              onMarkAsCompleted={() => handleMarkAsCompleted(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
