import { useQueryClient, useMutation } from '@tanstack/react-query';
import { api } from '../api/api';
import { Claim } from '../api/apiTypes';

export const useClaim = (lang) => {
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
