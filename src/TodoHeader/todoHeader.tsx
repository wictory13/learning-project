import * as React from "react";
import cn from "./todoHeader.css"

export class TodoHeader extends React.Component {
    render() {
        return <h1 className={cn.header}>todos</h1>;
    }
}