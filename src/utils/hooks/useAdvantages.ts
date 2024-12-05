import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useAdvantages = (lang: Lang) => {
  return useQuery({
    queryKey: ['advantages', lang],
    queryFn: () => api.getAdvantages(lang),
  });
};
