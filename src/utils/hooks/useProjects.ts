import { skipToken, useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useProjects = (lang: Lang, enabled: boolean) => {
  return useQuery({
    queryKey: ['projects', lang],
    queryFn: enabled ? () => api.getProjects(lang) : skipToken,
  });
};
