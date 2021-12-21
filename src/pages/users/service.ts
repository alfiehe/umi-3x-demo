import { request } from "umi";

export const getRemoteList = async () => {
  const res = await request('http://public-api-v1.aspirantzhang.com/users');
  return res;
}