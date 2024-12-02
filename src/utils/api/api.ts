import { fetchData } from '../fetchData';
import { Advantage, Project } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang) => Promise<{ data: Advantage[] }>;
  getProjects: (lang) => Promise<{ data: Project[] }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
  async getProjects(lang): Promise<{ data: Project[] }> {
    return fetchData(lang, 'examples/');
  }
}

export const api = new Api();
