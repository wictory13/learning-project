import * as React from "react";

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    onContentChange(e) {
        this.props.onBlur(this.state.value)
    };

    onChange (e) {
        this.setState({ value: e.target.value })
    };

    render() {
        const {autoFocus, ...rest} = this.props


        return (
            <input
                onChange={this.onChange.bind(this)}
                onBlur={this.onContentChange.bind(this)}
                value={this.state.value}
                type="text"
            />
        )
    }
}

export default class EditableField extends React.Component {
    constructor (props) {
        super(props)

        // init counter
        this.count = 0

        // init state
        this.state = {
            edit: false,

        }
        console.log(this.props)
    }

    componentWillUnmount () {
        // cancel click callback
        if (this.timeout) clearTimeout(this.timeout)
    }

    handleClick (e) {
        // cancel previous callback
        if (this.timeout) clearTimeout(this.timeout)

        // increment count
        this.count++

        // schedule new callback  [timeBetweenClicks] ms after last click
        this.timeout = setTimeout(() => {
            // listen for double clicks
            if (this.count === 2) {
                // turn on edit mode
                this.setState({
                    edit: true,
                })
            }

            // reset count
            this.count = 0
        }, 250) // 250 ms
    }

    handleBlur (e) {
        // handle saving here
        console.log(e);
        // close edit mode
        this.setState({
            edit: false,
        })
    }

    render () {
        if (this.state.edit) {
            // edit mode
            return (
                <Field
                    autoFocus
                    onBlur={this.handleBlur.bind(this)}
                />
            )
        } else {
            // view mode
            return (
                <span
                    onClick={this.handleClick.bind(this)}
                >
          {this.props.value}
        </span>
            )
        }
    }
}