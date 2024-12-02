import { fetchData } from '../fetchData';
import { Advantage } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang) => Promise<{ data: Advantage[] }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
}

export const api = new Api();
