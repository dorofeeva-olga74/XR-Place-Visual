import { fetchData } from '../fetchData';
import { Advantage, Metric, Project, TeamMember } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang) => Promise<{ data: Advantage[] }>;
  getProjects: (lang) => Promise<{ data: Project[] }>;
  getTeam: (lang) => Promise<{ data: TeamMember[] }>;
  getMetrics: (lang) => Promise<{ data: Metric[] }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
  async getProjects(lang): Promise<{ data: Project[] }> {
    return fetchData(lang, 'examples/');
  }
  async getTeam(lang): Promise<{ data: TeamMember[] }> {
    return fetchData(lang, 'team/');
  }
  async getMetrics(lang): Promise<{ data: Metric[] }> {
    return fetchData(lang, 'metrics/');
  }
}

export const api = new Api();
