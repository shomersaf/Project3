export interface IRoute {
    path: string,
    key: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any,
    label?: string
  }
  export interface IVacation {
    destination: string;
    about: string;
    fromDate: string;
    toDate: string;
    price: number;
    imageSrc: string;
    followers: number;
  }
  