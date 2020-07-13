import * as React from "react";
import TodoContent from "../TodoContent/todoContent";
import cn from "./todo.less";
import {TodoItem} from "../Domain/todoItem";

interface TodoProps {
    todo: TodoItem,
    onDeleteTodo: () => void,
    onCheckTodo: () => void,
    onEditTodo: (nextName: string) => void
}

interface TodoState {
    value: string
}

export class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {
            value: this.props.todo.value
        }
    }

    onEditTodo = () => {
        this.props.onEditTodo(this.state.value);
    }

    render() {
        return (
            <div className={cn.todo}>
                <span className={cn.todoField}>
                    <input type="checkbox" onChange={this.props.onCheckTodo} checked={this.props.todo.isDone}
                           className={cn.checkBox}/>
                    <TodoContent
                        isChecked={this.props.todo.isDone}
                        onDeleteTodo={this.props.onDeleteTodo}
                        value={this.state.value}
                        onChange={(value) => this.setState({value: value})}
                        onEditTodo={this.onEditTodo}
                    />
                </span>
            </div>
        );
    }
}
