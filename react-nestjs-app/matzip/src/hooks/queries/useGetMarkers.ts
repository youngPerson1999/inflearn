import {useQuery} from '@tanstack/react-query';
import getMarkers from '@/api/marker';
import {queryKeys} from '@/constants/key';
import {UseQueryCustomOptions} from '@/types/api';
import {Marker} from '@/types/domain';

function useGetMarkers(queryOptions?: UseQueryCustomOptions<Marker[]>) {
  return useQuery({
    queryFn: getMarkers,
    queryKey: [queryKeys.MARKER, queryKeys.GET_MARKERS],
    ...queryOptions,
  });
}

export default useGetMarkers;
