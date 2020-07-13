import * as React from "react";
import cn from "./todoContent.less";
import {EditableField} from "./editableField";


interface TodoContentProps {
    value: string,
    onChange: (e: string) => void,
    onEditTodo: () => void,
    onDeleteTodo: () => void,
    isChecked: boolean
}

interface TodoContentState {
    edit: boolean
}

export default class TodoContent extends React.Component<TodoContentProps, TodoContentState> {
    constructor(props: TodoContentProps) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    handleDoubleClick = () => {
        this.setState({
            edit: true,
        })
    }

    handleEndEdit = () => {
        this.setState({
            edit: false,
        });
        this.props.onEditTodo();
    }

    render() {
        const contentStyle = cn("notEdit", {isChecked: this.props.isChecked})

        if (this.state.edit) {
            return (
                <EditableField
                    onChange={(nextValue) => this.props.onChange(nextValue)}
                    onEndEdit={this.handleEndEdit}
                    value={this.props.value}
                />
            );
        } else {
            return (
                <span className={contentStyle}
                      onDoubleClick={this.handleDoubleClick}
                >
        {this.props.value}
                    <button className={cn.deleteTodo} onClick={this.props.onDeleteTodo}>×</button>
        </span>
            );
        }
    }
}
