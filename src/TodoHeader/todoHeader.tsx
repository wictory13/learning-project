import * as React from "react";
import cn from "./todoHeader.less";

export class TodoHeader extends React.Component {
    render(): JSX.Element {
        return <h1 className={cn.header}>todos</h1>;
    }
}
