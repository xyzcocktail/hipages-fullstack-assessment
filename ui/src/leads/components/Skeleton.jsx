import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const LoadingLead = () => {
  return (
    <div>
      <Skeleton animation="wave" variant="circle" width={40} height={40} />
      <Skeleton variant="text" />
      <Skeleton variant="rect" height={80} />
      <Skeleton variant="text" />
      <Skeleton variant="rect" height={80} />
    </div>
  );
}
