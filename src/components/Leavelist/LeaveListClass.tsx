
import Leave from "../Leave/leave.tsx";
import styles from "./Leavelist.module.scss";
import { Component } from "react";
import { LeaveListState, ListProps } from "./Leavelist.types.ts";


class LeaveList extends Component<ListProps, LeaveListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, leaves, action, handleClick } = this.props;

    return (
      <div className={styles.LeaveList}>
        <h2>{title}</h2>
        {leaves.map((leave: any) => {
          return (
            <Leave
              date={leave.date}
              desc={leave.desc}
              id={leave.id}
              type={leave.type}
              action={action}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default LeaveList;