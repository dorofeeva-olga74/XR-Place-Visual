import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useProjects = (lang) => {
  return useQuery({
    queryKey: ['projects', lang],
    queryFn: () => api.getProjects(lang),
  });
};
