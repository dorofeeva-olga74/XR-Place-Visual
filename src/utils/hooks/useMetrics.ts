import { skipToken, useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useMetrics = (lang: Lang, enabled: boolean) => {
  return useQuery({
    queryKey: ['metrics', lang],
    queryFn: enabled ? () => api.getMetrics(lang) : skipToken,
  });
};
