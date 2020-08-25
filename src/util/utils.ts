/**
 * 获取唯一值
 */
export const getUid: () => string = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) + new Date().getTime().toString().slice(-4);
}
