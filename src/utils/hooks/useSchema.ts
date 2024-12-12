import { skipToken, useQuery } from '@tanstack/react-query';
import { api } from '../api/api';

export const useSchema = (lang: Lang, enabled: boolean) => {
  return useQuery({
    queryKey: ['schema', lang],
    queryFn: enabled ? () => api.getSchema(lang) : skipToken,
  });
};
