import {getFormDataImages} from '@/utils/image';
import ImagePicker from 'react-native-image-crop-picker';
import useMutateImages from './queries/useMutateImages';
import {useState} from 'react';
import {ImageUri} from '@/types/domain';

function useImagePicker() {
  const uploadImages = useMutateImages();
  const [imageUris, setImageUris] = useState<ImageUri[]>([]);

  const addImageUri = (uris: string[]) => {
    setImageUris(prevUris => [...prevUris, ...uris.map(uri => ({uri}))]);
  };

  const hadleChangeImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: true,
      includeBase64: true,
      maxFiles: 5,
    }).then(images => {
      const formData = getFormDataImages('images', images);
      uploadImages.mutate(formData, {
        onSuccess: data => {
          addImageUri(data);
        },
        onError: error => {
          console.log('upload images error: ', error);
        },
      });
    });
  };
  return {imageUris, hadleChangeImage};
}

export default useImagePicker;
