import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast({ className, ...props}) {
  const toastClassName = `${className}__toast`
  const bodyClassName = `${className}__body`
  return (
    <ToastContainer
      className={className}
      toastClassName={toastClassName}
      bodyClassName={bodyClassName}
      {...props}
    />
  )
}
