import { useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useSchema = (lang: Lang) => {
  return useQuery({
    queryKey: ['schema', lang],
    queryFn: () => api.getSchema(lang),
  });
};
