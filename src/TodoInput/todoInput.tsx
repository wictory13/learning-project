import * as React from "react";
import cn from './todoInput.less'

interface TodoInputProps {
    onAddTodo: (value: string) => void
}

interface TodoInputState {
    value: string
}

export class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    constructor(props: TodoInputProps) {
        super(props);
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <input className={cn.todoInput}
                   value={this.state.value}
                   onChange={event => this.setState({value: event.target.value})} onKeyPress={this.handleKeyPressed}
                   placeholder="What needs to be done?"/>
        );
    }

    handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            let newTodo = this.state.value;
            if (newTodo) {
                this.props.onAddTodo(newTodo);
            }
            this.setState({value: ""});
        }
    }
}