import axios from 'axios';
import {Platform} from 'react-native';

export const baseURLs = {
  ios: 'http://localhost:3030',
  android: 'http://10.0.2.2:3030',
};

export const getBaseURL = () => {
  return Platform.OS === 'ios' ? baseURLs.ios : baseURLs.android;
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
});

export default axiosInstance;
