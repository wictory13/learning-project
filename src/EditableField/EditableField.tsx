import * as React from "react";

interface FieldPropsType {
    value: string,
    onChange: (e: string) => void,
    onEndEdit: () => void
}

interface FieldStateType {
    value: string
}

class Field extends React.Component<FieldPropsType, FieldStateType> {
    constructor(props: FieldPropsType) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    endContentChange() {
        this.props.onEndEdit();
    };

    render() {
        return (
            <input
                defaultValue={this.state.value}
                onChange={event => this.props.onChange(event.target.value)}
                onBlur={this.endContentChange.bind(this)}
                type="text"
            />
        )
    }
}

interface EditableFieldPropsType {
    value: string,
    onChange: (e: string) => void,
    onEditTodo: () => void
}

interface EditableFieldStateType {
    edit: boolean
}

export default class EditableField extends React.Component<EditableFieldPropsType, EditableFieldStateType> {
    constructor(props: EditableFieldPropsType) {
        super(props)
        this.state = {
            edit: false,
        }
    }

    handleDoubleClick() {
        this.setState({
            edit: true,
        })
    }

    handleEndEdit() {
        this.setState({
            edit: false,
        });
        this.props.onEditTodo();
    }

    render() {
        if (this.state.edit) {
            return (
                <Field
                    onChange={(nextValue) => this.props.onChange(nextValue)}
                    onEndEdit={this.handleEndEdit.bind(this)}
                    value={this.props.value}
                />
            );
        } else {
            return (
                <span
                    onDoubleClick={this.handleDoubleClick.bind(this)}
                >
          {this.props.value}
        </span>
            );
        }
    }
}
