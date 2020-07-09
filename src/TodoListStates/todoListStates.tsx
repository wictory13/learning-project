import * as React from "react";
import {TodoList} from "../TodoList/todoList"
import cn from './todoListStates.css'

interface TodoListStatesPropsType {
    todos: { id: number, value: string, isDone: boolean }[],
    onDeleteTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onCheckTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onEditTodo: (todo: { id: number; value: string; isDone: boolean }, nextName: string) => void
}

interface TodoListStatesStateType {
    selected: string
}

export class TodoListStates extends React.Component<TodoListStatesPropsType, TodoListStatesStateType> {
    constructor(props: TodoListStatesPropsType) {
        super(props);
        this.state = {
            selected: 'all'
        };
        this.onDeleteCompletedTodo = this.onDeleteCompletedTodo.bind(this);
    }

    onDeleteCompletedTodo(){
        // this.props.todos.map(todo => {
        //     if (todo.isDone) {
        //         console.log(todo)
        //         this.props.onDeleteTodo(todo);
        //     }
        // });
    }

    render() {
        let selectedTodos;
        if (this.state.selected === 'all') {
            selectedTodos = this.props.todos;
        } else if (this.state.selected === 'active') {
            selectedTodos = this.props.todos.filter(todo => !todo.isDone);
        } else {
            selectedTodos = this.props.todos.filter(todo => todo.isDone);
        }
        const noTodos = this.props.todos.length === 0 ? cn.noTodos : "todos";
        const todosNumber = this.props.todos.filter(todo => !todo.isDone).length;
        return (
            <div className={cn.todoListState}>
                <TodoList todos={selectedTodos}
                          onDeleteTodo={this.props.onDeleteTodo}
                          onCheckTodo={this.props.onCheckTodo}
                          onEditTodo={this.props.onEditTodo}
                />
                <span className={noTodos}>
                    <span>{todosNumber} items left</span>
                    <label>
                        <input type='radio' value='all'
                               checked={this.state.selected === 'all'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        All</label>
                    <label>
                        <input type='radio' value='active'
                               checked={this.state.selected === 'active'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        Active</label>
                    <label>
                        <input type='radio' value='completed'
                               checked={this.state.selected === 'completed'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        Completed</label>
                    <button onClick={this.onDeleteCompletedTodo}>Clear completed</button>
                </span>
            </div>
        );
    }
}