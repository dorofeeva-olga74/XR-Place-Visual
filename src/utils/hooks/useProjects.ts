import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useProjects = (lang: Lang) => {
  return useQuery({
    queryKey: ['projects', lang],
    queryFn: () => api.getProjects(lang),
  });
};
