import { useState } from "react";
import { Button } from "./components/ui/button";
import { Form } from "./components/ui/form";
import { Input } from "./components/ui/input";

function ToDoForm({ addToDoItems }) {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addToDoItems(inputValue);
      setInputValue("");
    }
  };

  return (
    <Form>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-full p-6"
      >
        <div className="flex items-center w-full max-w-sm space-x-2">
          <Input
            type="text"
            placeholder="Write your to do list!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></Input>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  );
}
export default ToDoForm;
