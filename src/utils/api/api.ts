import { fetchData } from '../fetchData';
import { Advantage, Claim, Lang, Metric, Project, SchemaStage, TeamMember } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang: Lang) => Promise<Advantage[]>;
  getProjects: (lang: Lang) => Promise<Project[]>;
  getTeam: (lang: Lang) => Promise<TeamMember[]>;
  getMetrics: (lang: Lang) => Promise<Metric[]>;
  getSchema: (lang: Lang) => Promise<SchemaStage[]>;
  createClaim: (lang: Lang, payload: Claim) => Promise<{ message: string; data: Claim }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang: Lang): Promise<Advantage[]> {
    return fetchData(lang, 'advantages/');
  }
  async getProjects(lang: Lang): Promise<Project[]> {
    return fetchData(lang, 'examples/');
  }
  async getTeam(lang: Lang): Promise<TeamMember[]> {
    return fetchData(lang, 'team/');
  }
  async getMetrics(lang: Lang): Promise<Metric[]> {
    return fetchData(lang, 'metrics/');
  }
  async getSchema(lang: Lang): Promise<SchemaStage[]> {
    return fetchData(lang, 'stages/');
  }
  async createClaim(lang: Lang, payload: Claim): Promise<{ message: string; data: Claim }> {
    return fetchData(lang, 'claim/', { method: 'POST', payload });
  }
}

export const api = new Api();
