export interface TodoItem {
    id: number;
    value: string;
    isDone: boolean;
}

export interface TodoAppState {
    todos: TodoItem[];
    id: number;
}

interface AddTodo {
    type: "ADD_TODO";
    payload: {
        name: string;
    };
}

interface EditTodo {
    type: "EDIT_TODO";
    payload: {
        id: number;
        newValue: string;
    };
}

interface DeleteTodo {
    type: "DELETE_TODO";
    payload: {
        id: number;
    };
}

interface CheckTodo {
    type: "CHECK_TODO";
    payload: {
        id: number;
    };
}

interface DeleteDoneTodos {
    type: "DELETE_DONE_TODOS";
}

interface CheckAllTodos {
    type: "CHECK_ALL_TODOS";
}

export type TodoAppActions = AddTodo | EditTodo | DeleteTodo | CheckTodo | DeleteDoneTodos | CheckAllTodos;
