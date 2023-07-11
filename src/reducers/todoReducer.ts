import { Todo, Action, ActionTypes } from "../actions";

const defaultTodos = [
  {
    id: 1,
    content: "把冰箱發霉的檸檬拿去丟",
    completed: false,
  },
  {
    id: 2,
    content: "打電話叫媽媽匯款給我",
    completed: true,
  },
  {
    id: 3,
    content: "整理電腦資料夾",
    completed: false,
  },
  {
    id: 4,
    content: "繳電費水費瓦斯費",
    completed: true,
  },
  {
    id: 5,
    content: "約 vicky 禮拜三泡溫泉",
    completed: false,
  },
  {
    id: 6,
    content: "約 ada 禮拜四吃晚餐",
    completed: false,
  },
];

export const todoReducer = (state: Todo[] = defaultTodos, action: Action) => {
  switch (action.type) {
    case ActionTypes.addTodos:
      const newTodo = {
        id: Date.now(),
        content: action.payload,
        completed: false,
      };
      return [...state, newTodo];
    case ActionTypes.checkTodos:
      return state.map((i: Todo) => {
        return i.id === action.payload
          ? { ...i, completed: !i.completed }
          : { ...i };
      });
    case ActionTypes.deleteTodos:
      return state.filter((i: Todo) => {
        return i.id !== action.payload;
      });
    case ActionTypes.deleteAllTodos:
      return state.filter((i: Todo) => {
        return i.completed !== true;
      });
    default:
      return state;
  }
};
