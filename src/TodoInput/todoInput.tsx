import * as React from "react";
import cn from "./todoInput.less";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface TodoInputProps {
    onAddTodo: (value: string) => void;
}

interface TodoInputState {
    value: string;
}

export class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
    constructor(props: TodoInputProps) {
        super(props);
        this.state = {
            value: "",
        };
    }

    render(): JSX.Element {
        return (
            <input
                className={cn.todoInput}
                value={this.state.value}
                onChange={(event) => this.setState({ value: event.target.value })}
                onKeyPress={this.handleKeyPressed}
                placeholder="What needs to be done?"
            />
        );
    }

    handleKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") {
            const newTodo = this.state.value;
            if (newTodo) {
                this.props.onAddTodo(newTodo);
            }
            this.setState({ value: "" });
        }
    };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onAddTodo: (value: string) =>
            dispatch({
                type: "ADD_TODO",
                payload: {
                    name: value,
                },
            }),
    };
};

export const TodoInputContainer = connect(undefined, mapDispatchToProps)(TodoInput);
