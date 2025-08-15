import { http1 } from '@/common/request';

// 合并文件
export function fileMerge(body: any):Promise<any> {
  const url = '/system/file/merge';
  return http1.post(url, body);
}