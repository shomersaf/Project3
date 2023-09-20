export interface IRoute {
    path: string,
    key: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any,
    label?: string
  }
  export interface IVacation {
    vcnId:string;
    destination: string;
    about: string;
    fromDate: string;
    toDate: string;
    price: number;
    imageSrc: string;
    followers: number;
  }
  
  export interface IUser {
    firstName:string,
    lastName:string,
    email:string, 
    pswrd:string, 
    userRole:string
  }