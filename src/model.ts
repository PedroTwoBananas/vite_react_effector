import { createStore, createEvent } from 'effector';
import { debug } from 'patronum';

interface Task {
  text: string;
  id: number;
}
export const addTaskEvent = createEvent<string>();

export const $tasks = createStore<Task[]>([]);

$tasks.on(addTaskEvent, (state, payload) => [
  ...state,
  { text: payload, id: Date.now() },
]);

debug($tasks);
