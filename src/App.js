import { useState } from 'react';

import Button from './Button';
import styles from './App.module.css';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleChange = event => setToDo(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();

    if (toDo === '') return;
    else {
      setToDoList([toDo, ...toDoList]);
      setToDo('');
    }
  };

  return (
    <>
      <h1 className={styles.title}>To-Do List ({toDoList.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={toDo}
          type="text"
          placeholder="Write your To-Do..."
        />
        <Button text={'Add To-Do'} />
      </form>

      <hr />

      <ul>
        {toDoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
