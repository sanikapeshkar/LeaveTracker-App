export interface LeaveProps {
  id: number;
  date: string;
  desc: string;
  type:string
  action: ((props: any) => JSX.Element)[];

  handleClick:(id:number,type:string)=>void
}


export interface LeaveState{}

