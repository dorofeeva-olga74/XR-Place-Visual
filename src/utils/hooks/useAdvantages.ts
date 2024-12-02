import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useAdvantages = (lang) => {
  return useQuery({
    queryKey: ['advantages', lang],
    queryFn: () => api.getAdvantages(lang),
  });
};
