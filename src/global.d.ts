
declare interface Window {
  md5: (str: string, key?: string, raw?: boolean) => string;
}
declare type ApiRequest = (data: any) => Promise<boolean | string>