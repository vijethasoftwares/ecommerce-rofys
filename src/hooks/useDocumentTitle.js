import { useLayoutEffect } from 'react';

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'ROFYS - eCommerce React App';
    }
  }, [title]);
};

export default useDocumentTitle;
