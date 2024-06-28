import { MouseEvent } from "react";
import styles from "./leave.module.scss";

import { Component } from "react";
import { LeaveProps, LeaveState } from "./leave.types";


class Leave extends Component<LeaveProps, LeaveState> {
  constructor(props: LeaveProps) {
    super(props);
    this.state = {};
  }

  handleButtonClick = (id: number, type: string) => {
    this.props.handleClick(id, type);
  };

  render() {
    const { date, desc, type, id, action } = this.props;

    return (
      <div className={styles.Leave}>
        <span>{id}</span>
        <span>{date}</span>
        <span>{desc}</span>

        {action.map((Btns:any) => (
          <Btns
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              this.handleButtonClick(id, e.target.innerText)
            }
          />
        ))}
      </div>
    );
  }
}

export default Leave;