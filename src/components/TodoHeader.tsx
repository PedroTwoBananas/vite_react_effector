import { useState, FormEvent } from 'react';
import { addTaskEvent } from '../model';

const TodoHeader = () => {
  const [input, setInput] = useState('');
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleButton = () => {
    addTaskEvent(input);
  };

  return (
    <>
      <div>
        <form>
          <input type="string" value={input} onChange={handleInput} />
        </form>
        <div>
          <span>Введите задачу</span>
        </div>
        <button onClick={handleButton}>Добавить</button>
      </div>
    </>
  );
};

export default TodoHeader;
