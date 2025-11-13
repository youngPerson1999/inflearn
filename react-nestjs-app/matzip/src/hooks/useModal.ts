import {useState} from 'react';

function useModal() {
  const [isVisible, setIsVisible] = useState(false);
  const hide = () => {
    setIsVisible(false);
  };
  const show = () => {
    setIsVisible(true);
  };
  return {isVisible, show, hide};
}

export default useModal;
