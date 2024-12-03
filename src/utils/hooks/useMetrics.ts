import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useMetrics = (lang) => {
  return useQuery({
    queryKey: ['metrics', lang],
    queryFn: () => api.getMetrics(lang),
  });
};
