import { useState } from "react";
import { Button } from "./components/ui/button";
import { Form } from "./components/ui/form";
import { Input } from "./components/ui/input";

function EditToDoList({ editToDoItems, item }) {
  const [inputValue, setInputValue] = useState(item.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editToDoItems(inputValue, item.id);
  };

  return (
    <Form>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-full p-6"
      >
        <div className="flex items-center w-full max-w-sm space-x-3">
          <Input
            type="text"
            placeholder="Update"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></Input>
          <Button type="submit">Update</Button>
        </div>
      </form>
    </Form>
  );
}
export default EditToDoList;
