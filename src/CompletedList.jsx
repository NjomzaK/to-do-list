import { DividerHorizontalIcon, CheckIcon } from "@radix-ui/react-icons";

import { TrashIcon } from "@radix-ui/react-icons";
import { Checkbox } from "./components/ui/checkbox";
function Completed({ task, deleteToDoItems, checkedItem }) {
  return (
    <>
      <div className="toDo">
        <Checkbox defaultChecked={true} onClick={checkedItem} />
        <h4>{task}</h4>
        <TrashIcon onClick={deleteToDoItems} />
      </div>
    </>
  );
}
export default Completed;
