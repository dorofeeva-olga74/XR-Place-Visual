import { fetchData } from '../fetchData';
import { Advantage, Claim, Lang, Metric, Project, SchemaStage, TeamMember } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang: Lang) => Promise<{ data: Advantage[] }>;
  getProjects: (lang: Lang) => Promise<{ data: Project[] }>;
  getTeam: (lang: Lang) => Promise<{ data: TeamMember[] }>;
  getMetrics: (lang: Lang) => Promise<{ data: Metric[] }>;
  getSchema: (lang: Lang) => Promise<{ data: SchemaStage[] }>;
  createClaim: (lang: Lang, payload: Claim) => Promise<{ data: { message: string; data: Claim } }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang: Lang): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
  async getProjects(lang: Lang): Promise<{ data: Project[] }> {
    return fetchData(lang, 'examples/');
  }
  async getTeam(lang: Lang): Promise<{ data: TeamMember[] }> {
    return fetchData(lang, 'team/');
  }
  async getMetrics(lang: Lang): Promise<{ data: Metric[] }> {
    return fetchData(lang, 'metrics/');
  }
  async getSchema(lang: Lang): Promise<{ data: SchemaStage[] }> {
    return fetchData(lang, 'stages/');
  }
  async createClaim(lang: Lang, payload: Claim): Promise<{ data: { message: string; data: Claim } }> {
    return fetchData(lang, 'claim/', { method: 'POST', payload });
  }
}

export const api = new Api();
