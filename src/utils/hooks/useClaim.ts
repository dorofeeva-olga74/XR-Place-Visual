import { useQueryClient, useMutation } from '@tanstack/react-query';
import { api } from '../api/api';
import { Claim, Lang } from '../api/apiTypes';

export const useClaim = (lang: Lang) => {
  const queryClient = useQueryClient();
  const createClaim = useMutation({
    mutationFn: (payload: Claim) => api.createClaim(lang, payload),
    onSuccess: (result) => queryClient.setQueryData(['claim'], result),
    onError: (error) => {
      throw new Error(error.message);
    },
  });
  return { createClaim };
};
