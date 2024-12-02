import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useTeam = (lang) => {
  return useQuery({
    queryKey: ['team', lang],
    queryFn: () => api.getTeam(lang),
  });
};
