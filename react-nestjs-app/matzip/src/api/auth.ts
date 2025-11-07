import {Profile} from '@/types/domain';
import axiosInstance from './axios';
import EncryptedStorage from 'react-native-encrypted-storage';

type RequestSignup = {
  email: string;
  password: string;
};

async function postSignup({email, password}: RequestSignup): Promise<void> {
  await axiosInstance({
    method: 'POST',
    url: 'auth/signup',
    data: {email, password},
  });
}

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

async function postLogin({
  email,
  password,
}: RequestSignup): Promise<ResponseToken> {
  const {data} = await axiosInstance({
    method: 'POST',
    url: 'auth/signin',
    data: {email, password},
  });
  return data;
}

async function getProfile(): Promise<Profile> {
  const {data} = await axiosInstance({
    method: 'GET',
    url: 'auth/profile',
  });
  return data;
}

async function getAccessToken(): Promise<ResponseToken> {
  const refreshToken = await EncryptedStorage.getItem('refreshToken');
  const {data} = await axiosInstance({
    method: 'GET',
    url: 'refresh',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  return data;
}

async function logout(): Promise<void> {
  await axiosInstance({
    method: 'POST',
    url: 'auth/logout',
  });
  //   await EncryptedStorage.removeItem('refreshToken');
}

export {postSignup, postLogin, getProfile, getAccessToken, logout};
