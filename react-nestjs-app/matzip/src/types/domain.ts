interface ImageUri {
  id?: number;
  uri: string;
}

interface Marker {
  id: number;
  latitude: number;
  longitude: number;
  color: string;
  score: number;
}
type MarkerColor = 'RED' | 'YELLOW' | 'GREEN' | 'BLUE' | 'PURPLE';

type Category = {
  [key in MarkerColor]: string;
};

interface Post extends Marker {
  title: string;
  address: string;
  date: Date | string;
  description: string;
  imageUris: ImageUri[];
  isFavorite?: boolean;
}

interface Profile {
  id: number;
  email: string;
  nickname: string | null;
  imageUri: string | null;
  loginType: 'email' | 'kakao' | 'apple';
}

export type {ImageUri, Marker, Post, Profile, Category, MarkerColor};
