import axios from 'axios';
import {Platform} from 'react-native';

export const baseURLs = {
  ios: 'http://localhost:3030',
  android: 'http://10.0.2.2:3030',
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === 'ios' ? baseURLs.ios : baseURLs.android,
});

export default axiosInstance;
