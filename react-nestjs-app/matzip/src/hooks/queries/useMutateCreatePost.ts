import {useMutation} from '@tanstack/react-query';
import {createPost} from '@/api/post';
import {UseMutationCustomOptions} from '@/types/api';
import queryClient from '@/api/queryClient';
import {queryKeys} from '@/constants/key';

function useMutateCreatePost(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: createPost,
    onSuccess: newData => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
      });
      // queryClient.setQueryData(
      //   [queryKeys.MARKER, queryKeys.GET_MARKERS],
      //   (oldData: any) => {
      //     const newMarker = {
      //       id: newData.id,
      //       latitude: newData.latitude,
      //       longitude: newData.longitude,
      //       color: newData.color,
      //       score: newData.score,
      //     };
      //     return oldData ? [...oldData, newMarker] : [newMarker];
      //   },
      // );
    },
    ...mutationOptions,
  });
}

export default useMutateCreatePost;
