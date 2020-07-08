import * as React from "react";

interface TodoFormPropType {
    onAddTodo: (value: string) => void
}

export class TodoForm extends React.Component<TodoFormPropType, {}> {
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
            <input onKeyPress={this.keyPressed} ref={this.input} placeholder="What needs to be done?"/>
        );
    }
}