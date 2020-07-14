export interface TodoItem {
    id: number,
    value: string,
    isDone: boolean
}

export interface TodoAppState {
    todos: TodoItem[]
}

export interface TodoListStatuses {
    status: "all" | "active" | "completed"
}

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHECK_TODO = 'CHECK_TODO'
export const DELETE_DONE_TODOS = 'DELETE_DONE_TODOS'
export const CHECK_ALL_TODOS = 'CHECK_ALL_TODOS'

interface AddTodo {
    type: typeof ADD_TODO
    payload: string
}

interface DeleteMessageAction {
    type: typeof DELETE_MESSAGE
    meta: {
        timestamp: number
    }
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction