export interface APIResponse<TData = any> {
  status: string;
  data: TData;
}
