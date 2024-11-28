import { API_URL } from './consts';

interface FetchOptions extends RequestInit {
  data?: object;
}

export const fetchData = async (endpoint: string, { data, ...customOptions }: FetchOptions | Record<string, never> = {}) => {
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
