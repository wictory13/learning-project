import * as React from "react";

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.keyPressed = this.keyPressed.bind(this);
    }

    keyPressed(event) {
        if (event.key === "Enter") {
            let newTodo = this.input.current.value;
            if (newTodo) {
                this.props.addTodo(newTodo);
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