import { Claim } from './api/apiTypes';

export const API_URL_RU = 'https://test-xrp.ru/ru/api/v1';
export const API_URL_EN = 'https://test-xrp.ru/en/api/v1';

export const gridElements = Array(12).fill('1');

export const inputs: { name: keyof Claim; required: boolean }[] = [
  {
    name: 'username',
    required: true,
  },
  {
    name: 'contacts',
    required: true,
  },
  {
    name: 'company',
    required: true,
  },
  {
    name: 'comment',
    required: false,
  },
];

export const WINDOW_WIDTH_LARGE = 1440;
export const WINDOW_WIDTH_MEDIUM = 1024;
export const WINDOW_WIDTH_TABLET = 760;
export const WINDOW_WIDTH_MOBILE = 450;
