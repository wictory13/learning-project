import * as React from "react";
import cn from './todoInput.less'

interface TodoFormPropType {
    onAddTodo: (value: string) => void
}

export class TodoInput extends React.Component<TodoFormPropType, {}> {
    private readonly input: React.RefObject<HTMLInputElement> = React.createRef();

    constructor(props: TodoFormPropType) {
        super(props);
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event: React.KeyboardEvent<HTMLInputElement>) {
        if (this.input.current == undefined) {
            return;
        }
        if (event.key === "Enter") {
            let newTodo = this.input.current.value;
            if (newTodo) {
                this.props.onAddTodo(newTodo);
            }
            this.input.current.value = "";
        }
    }

    render() {
        return (
            <input className={cn.todoInput} onKeyPress={this.keyPressed} ref={this.input} placeholder="What needs to be done?"/>
        );
    }
}