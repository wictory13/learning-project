import * as React from "react";
import EditableField from "../EditableField/editableField";
import cn from "./todo.less";

interface TodoPropsType {
    todo: { id: number, value: string, isDone: boolean },
    onDeleteTodo: () => void,
    onCheckTodo: () => void,
    onEditTodo: (nextName: string) => void
}

interface TodoStateType {
    text: string
}

export class Todo extends React.Component<TodoPropsType, TodoStateType> {
    constructor(props: TodoPropsType) {
        super(props);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onCheckTodo = this.onCheckTodo.bind(this);
        this.onEditTodo = this.onEditTodo.bind(this);
        this.state = {
            text: this.props.todo.value
        }
    }

    onDeleteTodo() {
        this.props.onDeleteTodo();

    }

    onCheckTodo() {
        this.props.onCheckTodo();
    }

    onEditTodo() {
        this.props.onEditTodo(this.state.text);
    }

    render() {

        return (
            <div className={cn.todo}>
                <span className={cn.todoField}>
                    <input type="checkbox" onChange={this.onCheckTodo} checked={this.props.todo.isDone} className={cn.checkBox}/>
                <span className={cn.todoContent}>
                    <EditableField
                        value={this.state.text}
                        onChange={(value) => this.setState({text: value})}
                        onEditTodo={this.onEditTodo}
                    />
                </span>
                    <button className={cn.deleteTodo} onClick={this.onDeleteTodo}>×</button>
                </span>
            </div>
        );
    }
}
