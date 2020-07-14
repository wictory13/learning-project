import * as React from "react";
import {TodoList} from "../TodoList/todoList"
import cn from './todoListStatuses.less'
import {TodoItem} from "../Domain/types";

interface TodoListStatesProps {
    todos: TodoItem[],
    onDeleteTodo: (todo: TodoItem) => void,
    onCheckTodo: (todo: TodoItem) => void,
    onEditTodo: (todo: TodoItem, nextName: string) => void,
    onDeleteDoneTodos: () => void,
    onCheckAllTodos: () => void
}

interface TodoListStatesState {
    selected: string
}

export class TodoListStatuses extends React.Component<TodoListStatesProps, TodoListStatesState> {
    constructor(props: TodoListStatesProps) {
        super(props);
        this.state = {
            selected: 'all'
        };
    }

    chooseState = () => {
        if (this.state.selected === 'all') {
            return this.props.todos;
        } else if (this.state.selected === 'active') {
            return this.props.todos.filter(todo => !todo.isDone);
        } else {
            return this.props.todos.filter(todo => todo.isDone);
        }
    }

    render() {
        let selectedTodos = this.chooseState();
        const todosNumber = this.props.todos.filter(todo => !todo.isDone).length;
        const mainDivStyle = cn({
            todoListState: true,
            noTodos: this.props.todos.length === 0
        });
        const clearButtonStyle = cn({
            clearButton: true,
            noClearButton: this.props.todos.filter(todo => todo.isDone).length === 0
        });

        return (
            <div className={mainDivStyle}>
                <TodoList todos={selectedTodos}
                          onDeleteTodo={this.props.onDeleteTodo}
                          onCheckTodo={this.props.onCheckTodo}
                          onEditTodo={this.props.onEditTodo}
                          onCheckAllTodos={this.props.onCheckAllTodos}
                />
                <div className={cn.states}>
                    <span>{todosNumber} {todosNumber === 1 ? "item" : "items"} left</span>
                    <span className={cn.statesRemote}>
                    <label>
                        <input type='radio' value='all' className={cn.stateButton}
                               checked={this.state.selected === 'all'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input type='radio' value='active' className={cn.stateButton}
                               checked={this.state.selected === 'active'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>Active</span>
                    </label>
                    <label>
                        <input type='radio' value='completed' className={cn.stateButton}
                               checked={this.state.selected === 'completed'}
                               onChange={(e) => this.setState({selected: e.target.value})}/>
                        <span>Completed</span>
                    </label>
                        </span>
                    <button className={clearButtonStyle} onClick={this.props.onDeleteDoneTodos}>Clear completed</button>
                </div>
            </div>
        );
    }
}
