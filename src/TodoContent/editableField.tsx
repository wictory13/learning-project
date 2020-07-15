import * as React from "react";
import cn from "./editableField.less";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface EditableFieldProps {
    value: string;
    id: number;
    onEndEdit: () => void;
    onEditTodo: (id: number, newValue: string) => void;
}

interface EditableFieldState {
    value: string;
}

export class EditableField extends React.Component<EditableFieldProps, EditableFieldState> {
    constructor(props: EditableFieldProps) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    endContentChange = (): void => {
        this.props.onEditTodo(this.props.id, this.state.value);
        this.props.onEndEdit();
    };

    undoneContentChange = (): void => {
        this.props.onEndEdit();
    };

    render(): JSX.Element {
        return (
            <input
                className={cn.edit}
                value={this.state.value}
                onChange={(event) => this.setState({ value: event.target.value })}
                onBlur={this.endContentChange}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        this.endContentChange();
                    } else if (event.key === "Escape") {
                        this.undoneContentChange();
                    }
                }}
                type="text"
            />
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onEditTodo: (id: number, newValue: string) =>
            dispatch({
                type: "EDIT_TODO",
                payload: {
                    id: id,
                    newValue: newValue,
                },
            }),
    };
};

export const EditableFieldContainer = connect(undefined, mapDispatchToProps)(EditableField);
