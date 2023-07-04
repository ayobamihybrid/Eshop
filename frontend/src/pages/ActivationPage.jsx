import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../server';
import { toast } from 'react-toastify';

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   if (activation_token) {
  //     const sendRequest = async () => {
  //       try {
  //         const res = await axios.post(`${server2}user/activation`, {
  //           activation_token,
  //         });
  //         console.log(res);
  //       } catch (err) {
  //         setError(true);
  //       }
  //     };
  //     sendRequest();
  //   }
  // }, [activation_token]);

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation/:id`, {
            activation_token,
          })
          .then((res) => {
            toast.success(res.data.message);
          })
          .catch((err) => {
            setError(true);
            toast.success(err);
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
