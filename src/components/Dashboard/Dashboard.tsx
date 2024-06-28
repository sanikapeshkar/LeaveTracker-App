import { DATA } from "../../data.ts";
import LeaveList from "../Leavelist/Leavelist.tsx";
import styles from "./dashboard.module.scss";
import { ButtonHTMLAttributes, useState } from "react";
import { DashboardProps } from "./dashboard.types.ts";

const Dashboard = ({}: DashboardProps) => {
  const [leave, setLeave] = useState(DATA);



function handleClick  (id: number, type: string) {
    const updatedLeaves = leave.map((leaveItem) => {
      if (leaveItem.id === id) {
        return { ...leaveItem, type: type as "M" | "P" | "S"};
      } else {
        return leaveItem;
      }
    });
    setLeave(updatedLeaves);
  };
  const createButton =(text:'M'|'P'|'S')=>{
    return (props:ButtonHTMLAttributes<any>)=>{
      return (<button {...props} className={styles[text]}>{text}</button>)
    }
  }
  const mandatoryBtn= createButton('M')
  const  SickBtn=createButton('S')
  const PlannedBtn=createButton('P')

   return (
    <div className={styles.Dashboard}>
      <LeaveList
        title="Mandatory"
        leaves={leave.filter((l) => l.type === "M")}
        action={[SickBtn, PlannedBtn]}
        handleClick={handleClick}
      />
      <LeaveList
        title="Planned"
        leaves={leave.filter((l) => l.type === "P")}
        action={[mandatoryBtn,SickBtn]}
        handleClick={handleClick}
      />
      <LeaveList
        title="Sick"
        leaves={leave.filter((l) => l.type === "S")}
        action={[PlannedBtn, mandatoryBtn]}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Dashboard;



