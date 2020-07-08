import * as React from "react";
import {TodoList} from "../TodoList/todoList"

/**
 * todos: []
 * onDeleteTodo: () => void
 * onCheckTodo: () => void
 * onEditTodo: (nextName: string) => void
 */
export class TodoListStates extends React.Component {
    constructor(props) {
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
        return (
            <div>
                <TodoList todos={selectedTodos}
                          onDeleteTodo={this.props.onDeleteTodo}
                          onCheckTodo={this.props.onCheckTodo}
                          onEditTodo={this.props.onEditTodo}
                />
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
            </div>
        );
    }
}