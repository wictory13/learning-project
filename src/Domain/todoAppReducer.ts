import { TodoAppActions, TodoAppState } from "./types";

export function todoApp(state: TodoAppState = { todos: [], id: 0 }, action: TodoAppActions): TodoAppState {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.id + 1,
                        value: action.payload.name,
                        isDone: false,
                    },
                ],
                id: state.id + 1,
            };
        }
        case "EDIT_TODO": {
            const currentIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, currentIndex),
                    {
                        ...state.todos[currentIndex],
                        value: action.payload.newValue,
                    },
                    ...state.todos.slice(currentIndex + 1),
                ],
            };
        }
        case "DELETE_TODO": {
            const currentIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, currentIndex),
                    ...state.todos.slice(state.todos.findIndex((todo) => todo.id === action.payload.id) + 1),
                ],
            };
        }
        case "CHECK_TODO": {
            const currentIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, currentIndex),
                    {
                        ...state.todos[currentIndex],
                        isDone: !state.todos[currentIndex].isDone,
                    },
                    ...state.todos.slice(currentIndex + 1),
                ],
            };
        }
        case "CHECK_ALL_TODOS": {
            const doneTodos = state.todos.filter((todo) => todo.isDone);
            const newTodos = [];
            if (doneTodos.length === state.todos.length) {
                for (const todo of state.todos) {
                    newTodos.push({
                        ...todo,
                        isDone: false,
                    });
                }
            } else {
                for (const todo of state.todos) {
                    if (!todo.isDone) {
                        newTodos.push({
                            ...todo,
                            isDone: true,
                        });
                    } else {
                        newTodos.push(todo);
                    }
                }
            }
            return {
                ...state,
                todos: newTodos,
            };
        }
        case "DELETE_DONE_TODOS": {
            const undoneTodos = state.todos.filter((todo) => !todo.isDone);
            return {
                ...state,
                todos: undoneTodos,
            };
        }
        default:
            return state;
    }
}
