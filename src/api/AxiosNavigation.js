import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from './index';

export default function AxiosNavigation() {
  const navigate = useRef(useNavigate());

  useEffect(() => {
    const intercetpor = instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.code === 'ERR_NETWORK') {
          navigate.current('/error', {
            state: {
              error_code: error.code,
            },
          });
        }
        if (error.response?.status < 200 || error.response?.status > 299) {
          navigate.current('/error');
        }
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(intercetpor);
    };
  }, []);
  return <></>;
}
