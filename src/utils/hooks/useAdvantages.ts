import { skipToken, useQuery } from '@tanstack/react-query';
import { api } from '../api/api';
import { Lang } from '../api/apiTypes';

export const useAdvantages = (lang: Lang, enabled: boolean) => {
  return useQuery({
    queryKey: ['advantages', lang],
    queryFn: enabled ? () => api.getAdvantages(lang) : skipToken,
  });
};
