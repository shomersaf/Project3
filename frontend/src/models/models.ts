export interface IRoute {
    path: string,
    key: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any,
    label?: string
  }
  