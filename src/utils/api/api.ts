import { fetchData } from '../fetchData';
import { Advantage, Claim, Metric, Project, SchemaStage, TeamMember } from './apiTypes';

interface ApiInterface {
  getAdvantages: (lang: string) => Promise<{ data: Advantage[] }>;
  getProjects: (lang: string) => Promise<{ data: Project[] }>;
  getTeam: (lang: string) => Promise<{ data: TeamMember[] }>;
  getMetrics: (lang: string) => Promise<{ data: Metric[] }>;
  getSchema: (lang: string) => Promise<{ data: SchemaStage[] }>;
  createClaim: (lang: string, payload: Claim) => Promise<{ data: { message: string; data: Claim } }>;
}

class Api implements ApiInterface {
  async getAdvantages(lang: string): Promise<{ data: Advantage[] }> {
    return fetchData(lang, 'advantages/');
  }
  async getProjects(lang: string): Promise<{ data: Project[] }> {
    return fetchData(lang, 'examples/');
  }
  async getTeam(lang: string): Promise<{ data: TeamMember[] }> {
    return fetchData(lang, 'team/');
  }
  async getMetrics(lang: string): Promise<{ data: Metric[] }> {
    return fetchData(lang, 'metrics/');
  }
  async getSchema(lang: string): Promise<{ data: SchemaStage[] }> {
    return fetchData(lang, 'stages/');
  }
  async createClaim(lang: string, payload: Claim): Promise<{ data: { message: string; data: Claim } }> {
    return fetchData(lang, 'claim/', { method: 'POST', payload });
  }
}

export const api = new Api();
