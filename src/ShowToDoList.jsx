import { TrashIcon } from "@radix-ui/react-icons";
import { Checkbox } from "./components/ui/checkbox";

function ShowToDoList({ task, deleteToDoItems, editToDoItems, checkedItem }) {
  return (
    <div className="toDo">
      <Checkbox onClick={checkedItem} />
      <h4 onClick={editToDoItems}>{task}</h4>
      <TrashIcon onClick={deleteToDoItems} />
    </div>
  );
}
export default ShowToDoList;
