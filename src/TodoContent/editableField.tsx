import * as React from "react";
import cn from "./editableField.less";

interface EditableFieldProps {
    value: string,
    onChange: (e: string) => void,
    onEndEdit: () => void,
}

interface EditableFieldState {
    value: string
}

export class EditableField extends React.Component<EditableFieldProps, EditableFieldState> {
    constructor(props: EditableFieldProps) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    endContentChange = () => {
        this.props.onChange(this.state.value);
        this.props.onEndEdit();
    };

    undoneContentChange = () => {
        this.props.onEndEdit();
    }

    render() {
        return (
            <input className={cn.edit} value={this.state.value}
                   onChange={event => this.setState({value: event.target.value})}
                   onBlur={this.endContentChange}
                   onKeyDown={event => {
                       if (event.key === "Enter") {
                           this.endContentChange();
                       } else if (event.key === "Escape") {
                           this.undoneContentChange();
                       }
                   }} type="text"/>
        )
    }
}