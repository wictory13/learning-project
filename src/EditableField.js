import * as React from "react";


class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    endContentChange(e) {
        this.props.onBlur();
    };

    render() {
        return (
            <input
                value={this.state.value}
                onChange={this.props.onChange}
                onBlur={this.endContentChange.bind(this)}
                type="text"
            />
        )
    }
}

/*

*/
export default class EditableField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
        }
    }

    handleDoubleClick(e) {
        this.setState({
            edit: true,
        })
    }

    handleEndEdit(e) {
        this.setState({
            edit: false,
        });
        this.props.onEditTodo();
    }

    render() {
        if (this.state.edit) {
            return (
                <Field
                    onChange={this.props.onChange}
                    autoFocus
                    onBlur={this.handleEndEdit.bind(this)}
                    value={this.props.value}
                />
            )
        } else {
            return (
                <span
                    onDoubleClick={this.handleDoubleClick.bind(this)}
                >
          {this.props.value}
        </span>
            )
        }
    }
}