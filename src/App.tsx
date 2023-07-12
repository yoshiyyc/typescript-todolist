import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Space, Button, Checkbox, Row, Col } from "antd";
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
    <div className="container">
      <Space.Compact className="addfield">
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
      <div className="todo__list">
        {todoList.map((i: Todo) => {
          return (
            <Row className="todo__item" key={i.id} justify="space-between">
              <Col>
                <Checkbox
                  onChange={() => handleCheck(i.id)}
                  checked={i.completed}
                >
                  {i.content}
                </Checkbox>
              </Col>
              <Col>
                <CloseOutlined
                  className="todo__delete"
                  onClick={() => handleDelete(i.id)}
                />
              </Col>
            </Row>
          );
        })}
      </div>
      <Row justify="space-between" className="todo__footer">
        <Col>
          <span>
            {todoList.filter((i: Todo) => i.completed === false).length}{" "}
            個待完成項目
          </span>
        </Col>
        <Col>
          <span className="todo__clear-all" onClick={handleDeleteAll}>
            清除已完成項目
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default App;
