import axios from 'axios';
import {Platform} from 'react-native';

const baseURL =
  Platform.OS === 'android' ? 'http://10.0.2.2:3030' : 'http://localhost:3030';

interface AxiosRequest<T> {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  url: string;
  data?: T;
}

export async function axiosInstance<T>({
  method,
  url,
  data,
  headers,
}: AxiosRequest<T>) {
  return await axios({
    method,
    url: `${baseURL}/${url}`,
    data,
    headers,
  });
}

export default axiosInstance;
