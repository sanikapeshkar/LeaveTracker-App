import { DATA } from "../../data.ts";
import LeaveList from "../Leavelist/Leavelist.tsx";
import styles from "./dashboard.module.scss";
import { ButtonHTMLAttributes, Component } from "react";
import { DashboardProps, DashboardState } from "./dashboard.types.ts";




class Dashboard extends Component<DashboardProps, DashboardState> {

  constructor(props: DashboardProps) {
    super(props);
    this.state = {
      leave: DATA,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id: number, type: string) {
    const updatedLeaves = this.state.leave.map((leaveItem) => {
      if (leaveItem.id === id) {
        return { ...leaveItem, type: type as "M" | "P" | "S" };
      } else {
        return leaveItem;
      }
    });
    this.setState({ leave: updatedLeaves });
  }

  createButton = (text: "M" | "P" | "S") => {
    return (props: ButtonHTMLAttributes<any>) => {
      return <button {...props} className={styles[text]}>{text}</button>;
    };
  };

  mandatoryBtn = this.createButton("M");
  sickBtn = this.createButton("S");
  plannedBtn = this.createButton("P");

  render() {
    return (
      <div className={styles.Dashboard}>
        <LeaveList
          title="Mandatory"
          leaves={this.state.leave.filter((l) => l.type === "M")}
          action={[this.sickBtn, this.plannedBtn]}
          handleClick={this.handleClick}
        />
        <LeaveList
          title="Planned"
          leaves={this.state.leave.filter((l) => l.type === "P")}
          action={[this.mandatoryBtn, this.sickBtn]}
          handleClick={this.handleClick}
        />
        <LeaveList
          title="Sick"
          leaves={this.state.leave.filter((l) => l.type === "S")}
          action={[this.plannedBtn, this.mandatoryBtn]}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Dashboard;
