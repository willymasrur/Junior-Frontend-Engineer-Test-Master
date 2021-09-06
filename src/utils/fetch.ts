import unfetch from 'isomorphic-unfetch';

export default async function fetch<TJSON = any>(input: RequestInfo, init?: RequestInit): Promise<TJSON> {
  const res = await unfetch(input, init);
  return res.json();
}
