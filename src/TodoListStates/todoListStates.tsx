import * as React from "react";
import {TodoList} from "../TodoList/todoList"
import cn from './todoListStates.less'

interface TodoListStatesPropsType {
    todos: { id: number, value: string, isDone: boolean }[],
    onDeleteTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onCheckTodo: (todo: { id: number; value: string; isDone: boolean }) => void,
    onEditTodo: (todo: { id: number; value: string; isDone: boolean }, nextName: string) => void
    onDeleteDoneTodos: () => void
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
        const todosNumber = this.props.todos.filter(todo => !todo.isDone).length;
        return (
            <div className={cn.todoListState}>
                <TodoList todos={selectedTodos}
                          onDeleteTodo={this.props.onDeleteTodo}
                          onCheckTodo={this.props.onCheckTodo}
                          onEditTodo={this.props.onEditTodo}
                />
                <div className={cn.states}>
                    <span>{todosNumber} items left</span>
                    <span className={cn.statesRemote}>
                    <label>
                        <input type='radio' value='all' className={cn.stateButton}
                               checked={this.state.selected === 'all'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>All</span></label>
                    <label>
                        <input type='radio' value='active' className={cn.stateButton}
                               checked={this.state.selected === 'active'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>Active</span></label>
                    <label>
                        <input type='radio' value='completed' className={cn.stateButton}
                               checked={this.state.selected === 'completed'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>Completed</span></label>
                        </span>
                    <button className={cn.clearButton} onClick={this.props.onDeleteDoneTodos}>Clear completed</button>
                </div>
            </div>
        );
    }
}