import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ShowToDoList from "./ShowToDoList";
import EditToDoList from "./EditToDoList";
import Completed from "./CompletedList";
import CompletedTasks from "./CompletedTasks";
import Title from "./Title";
import UncompletedTasks from "./UncompletedTasks";
import { ScrollArea } from "./components/ui/scroll-area";
function App() {
  const [toDoItems, setToDoItems] = useState([]);
  function addToDoItems(item) {
    setToDoItems((toDoItems) => [
      ...toDoItems,
      { id: Date.now(), editing: false, task: item, checked: false },
    ]);
  }
  function deleteToDoItems(id) {
    setToDoItems((toDoItems) => toDoItems.filter((item) => item.id !== id));
  }

  function editToDoItems(id) {
    setToDoItems((toDoItems) =>
      toDoItems.map((item) =>
        item.id === id ? { ...item, editing: !item.editing } : item
      )
    );
  }
  function editItem(task, id) {
    setToDoItems((toDoItems) =>
      toDoItems.map((item) =>
        item.id === id ? { ...item, task, editing: !item.editing } : item
      )
    );
  }
  function checkedItem(id) {
    setToDoItems((toDoItems) =>
      toDoItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }
  return (
    <div className="app">
      <Title />
      <ToDoForm addToDoItems={addToDoItems} />
      <UncompletedTasks />
      <div className="s">
        <ScrollArea className="h-[230px] w-[650px] rounded-my border p-6 ">
          {toDoItems
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((item) =>
              item.editing ? (
                <EditToDoList editToDoItems={editItem} item={item} />
              ) : !item.checked ? (
                <ShowToDoList
                  task={item.task}
                  deleteToDoItems={() => deleteToDoItems(item.id)}
                  editToDoItems={() => editToDoItems(item.id)}
                  checkedItem={() => checkedItem(item.id)}
                />
              ) : null
            )}
        </ScrollArea>
      </div>
      <div className="s">
        <CompletedTasks />
        <ScrollArea className="h-[230px] w-[650px] rounded-my border p-6 ">
          {toDoItems
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((item) =>
              item.checked ? (
                <Completed
                  task={item.task}
                  deleteToDoItems={() => deleteToDoItems(item.id)}
                  checkedItem={() => checkedItem(item.id)}
                />
              ) : null
            )}
        </ScrollArea>
      </div>
    </div>
  );
}

export default App;
