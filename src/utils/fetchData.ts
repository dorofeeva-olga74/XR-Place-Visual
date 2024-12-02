import { API_URL_RU } from './consts';
import { API_URL_EN } from './consts';

interface FetchOptions extends RequestInit {
  data?: object;
}

export const fetchData = async (lang: 'RU' | 'EN', endpoint: string, { data, ...customOptions }: FetchOptions | Record<string, never> = {}) => {
  const API_URL = lang === 'EN' ? API_URL_EN : API_URL_RU;
  const headers: RequestInit['headers'] = {};
  if (data) {
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
  if (data) {
    options.body = JSON.stringify(data);
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
