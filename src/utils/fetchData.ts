import { Lang } from './api/apiTypes';
import { API_URL_RU } from './consts';
import { API_URL_EN } from './consts';

interface FetchOptions extends RequestInit {
  payload?: object;
}

export const fetchData = async (lang: Lang, endpoint: string, { payload, ...customOptions }: FetchOptions | Record<string, never> = {}) => {
  const API_URL = lang === 'EN' ? API_URL_EN : API_URL_RU;
  const headers: RequestInit['headers'] = {};
  if (payload) {
    headers['Content-Type'] = 'application/json;charset=utf-8';
  }
  const options: RequestInit = {
    method: customOptions.method || 'GET',
    headers: {
      ...headers,
      ...customOptions.headers,
    },
    ...customOptions,
  };
  if (payload) {
    options.body = JSON.stringify(payload);
  }
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, options);
    const result = await res.json();
    if (res.ok) {
      return result;
    } else {
      throw new Error('Server Error');
    }
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Check your Internet Connection');
    }
    throw error;
  }
};
