import * as React from "react";
import {TodoList} from "../TodoList/todoList"

export class TodoListStates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'all'
        };
    }

    render() {
        return (
            <div>
                <TodoList state={this.state.selected} allTodos={this.props.allTodos} deleteTodo={this.props.deleteTodo}
                          clickTodo={this.props.clickTodo}
                          clickEditTodo={this.props.clickEditTodo}/>
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