import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useMetrics = (lang: Lang) => {
  return useQuery({
    queryKey: ['metrics', lang],
    queryFn: () => api.getMetrics(lang),
  });
};
