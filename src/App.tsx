import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Todo, ActionTypes } from "./actions";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const todoList = useSelector((state: any) => state.todoList);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (inputValue: string): void => {
    dispatch({ type: ActionTypes.addTodos, payload: inputValue });
    setInputValue("");
  };

  const handleCheck = (id: number): void => {
    dispatch({ type: ActionTypes.checkTodos, payload: id });
  };

  const handleDelete = (id: number): void => {
    dispatch({ type: ActionTypes.deleteTodos, payload: id });
  };

  const handleDeleteAll = (): void => {
    dispatch({ type: ActionTypes.deleteAllTodos });
  };

  return (
    <div className="App">
      <Space.Compact>
        <Input
          id="todoInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="新增待辦事項"
        />
        <Button onClick={() => handleAddTodo(inputValue)} type="primary">
          +
        </Button>
      </Space.Compact>
      <div>
        {todoList.map((i: Todo) => {
          return (
            <div key={i.id}>
              <input
                type="checkbox"
                onChange={() => handleCheck(i.id)}
                checked={i.completed}
              />
              <label htmlFor={i.id.toString()}>{i.content}</label>
              <CloseOutlined onClick={() => handleDelete(i.id)} />
            </div>
          );
        })}
      </div>
      <Space>
        <span>
          {todoList.filter((i: Todo) => i.completed === false).length}{" "}
          個待完成項目
        </span>
        <span onClick={handleDeleteAll}>清除已完成項目</span>
      </Space>
    </div>
  );
};

export default App;
