import styles from "./leave.module.scss";

const Leave = ({ date, desc, type, id, action, handleClick }: LeaveProps) => {
  // const component=<Action/>;
  return (
    <div className={styles.Leave}>
      <span>{id}</span>
      <span>{date}</span>
      <span>{desc}</span>

      {action.map((Btns) => (
        <Btns
          onClick={(e: MouseEvent) => handleClick(id,e.target.innerText)}
        />
      ))}
    </div>
  );
};

export default Leave;
