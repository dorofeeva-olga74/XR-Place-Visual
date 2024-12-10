import { skipToken, useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useTeam = (lang: Lang, enabled: boolean) => {
  return useQuery({
    queryKey: ['team', lang],
    queryFn: enabled ? () => api.getTeam(lang) : skipToken,
  });
};
