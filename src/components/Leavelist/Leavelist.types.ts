import Leave from "../Leave/LeaveClass";

 export interface ListProps {
  title:string,
  leaves:Leave[],
  action: ((props: any) => JSX.Element)[];
  handleClick:(id:number,type:string)=>void
}

export interface LeaveListState {}