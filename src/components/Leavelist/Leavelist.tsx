import Leave from "../Leave/leave.tsx";
import styles from "./Leavelist.module.scss";
const LeaveList = ({ title, leaves, action,handleClick }: ListProps) => {
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
};

export default LeaveList;
