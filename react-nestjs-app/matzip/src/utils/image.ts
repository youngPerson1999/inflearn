import {Image} from 'react-native-image-crop-picker';

function getFormDataImages(key: string = 'images', images: Image[]) {
  const formData = new FormData();
  images.forEach(({path, mime}) => {
    formData.append(key, {
      uri: path,
      type: mime,
      name: path.split('/').pop(),
    });
  });
  return formData;
}

export {getFormDataImages};
