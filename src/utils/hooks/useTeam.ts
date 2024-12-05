import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useTeam = (lang: Lang) => {
  return useQuery({
    queryKey: ['team', lang],
    queryFn: () => api.getTeam(lang),
  });
};
