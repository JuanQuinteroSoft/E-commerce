import React from 'react'
import { useRouteError } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout'
export default function Error404() {
    // const error = useRouteError();
    // console.error(error);
  
    return (
      <Layout>
        <div className='justify-center items-center mt-5 h-full'>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
      </div></div></Layout>
    );
}