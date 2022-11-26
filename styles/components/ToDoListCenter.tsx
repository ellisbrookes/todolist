import {
  Todolistcontainer,
  Todolistcontent,
} from "../components/ToDoListCenter.style";
export const ToDoListCenter = () => {
  return (
    <Todolistcontainer>
      <h1>To Do List</h1>
      <p>Here is where you can see your to do list</p>
      <Todolistcontent>
        <input type="text" placeholder="Add a new task" />
        <button>Create new task</button>
      </Todolistcontent>
    </Todolistcontainer>
  );
};
