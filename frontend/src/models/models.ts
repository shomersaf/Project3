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
  export interface  ILogin {
    result: IResult[][];
    signedToken: string;
  }
  interface IResult {
    pswrd: string;
    _buf: I_buf;
    _clientEncoding: string;
    _catalogLength: number;
    _catalogStart: number;
    _schemaLength: number;
    _schemaStart: number;
    _tableLength: number;
    _tableStart: number;
    _orgTableLength: number;
    _orgTableStart: number;
    _orgNameLength: number;
    _orgNameStart: number;
    characterSet: number;
    encoding: string;
    name: string;
    columnLength: number;
    columnType: number;
    type: number;
    flags: number;
    decimals: number;
  }
  
  interface I_buf {
    type: string;
    data: number[];
  }
  