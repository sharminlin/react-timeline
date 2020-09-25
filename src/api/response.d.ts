declare module "*.json" {
  const value: any;
  export default value;
}

declare interface ResponseBody {
  code: number,
  data: any,
  msg: string
}
