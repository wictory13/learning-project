import * as React from "react";
import cn from "./todoContent.less";
import {EditableFieldContainer} from "./editableField";
import {Dispatch} from "redux";
import {connect} from "react-redux";


interface TodoContentProps {
    id: number,
    value: string,
    onDeleteTodo: (id: number) => void,
    isChecked: boolean
}

interface TodoContentState {
    edit: boolean
}

class TodoContent extends React.Component<TodoContentProps, TodoContentState> {
    constructor(props: TodoContentProps) {
        super(props);
        this.state = {
            edit: false
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
    }

    render() {
        const contentStyle = cn("notEdit", {isChecked: this.props.isChecked})
        if (this.state.edit) {
            return (
                <EditableFieldContainer
                    onEndEdit={this.handleEndEdit}
                    value={this.props.value}
                    id={this.props.id}
                />
            );
        } else {
            return (
                <span className={contentStyle}
                      onDoubleClick={this.handleDoubleClick}
                >
        {this.props.value}
                    <button className={cn.deleteTodo} onClick={() => this.props.onDeleteTodo(this.props.id)}>×</button>
        </span>
            );
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onDeleteTodo: (id: number) => dispatch({
            type: 'DELETE_TODO',
            payload: {
                id: id
            }
        })
    };
}

export const TodoContentContainer = connect(undefined, mapDispatchToProps)(TodoContent);
