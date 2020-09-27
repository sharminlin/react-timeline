declare module "*.json" {
  const value: any;
  export default value;
}

declare type ApiRequest = (data: any) => Promise<boolean | string>

declare interface ResponseBody {
  code: number,
  data: any,
  msg: string
}
