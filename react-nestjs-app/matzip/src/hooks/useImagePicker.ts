import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import useMutateImages from './queries/useMutateImages';
import {ImageUri} from '@/types/domain';
import {getFormDataImages} from '@/utils/image';

function useImagePicker() {
  const uploadImages = useMutateImages();
  const [imageUris, setImageUris] = useState<ImageUri[]>([]);

  const addImageUri = (uris: string[]) => {
    setImageUris(prevUris => [...prevUris, ...uris.map(uri => ({uri}))]);
  };

  const deleteImageUri = (uri: string) => {
    const newImageUris = imageUris.filter(imageUri => imageUri.uri !== uri);
    setImageUris(newImageUris);
  };

  const handleChangeImage = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: true,
      includeBase64: true,
      maxFiles: 5,
    })
      .then(images => {
        const formData = getFormDataImages('images', images);
        uploadImages.mutate(formData, {
          onSuccess: data => {
            addImageUri(data);
          },
          onError: error => {
            console.log('upload images error: ', error);
          },
        });
      })
      .catch(error => {
        if (error.code !== 'E_PICKER_CANCELLED') {
          Toast.show({
            type: 'error',
            text1:
              '이미지 선택 중 오류가 발생했습니다. 권한 확인 후, 다시 시도해주세요.',
            position: 'bottom',
          });
        }
      });
  };
  return {imageUris, handleChangeImage, delete: deleteImageUri};
}

export default useImagePicker;
