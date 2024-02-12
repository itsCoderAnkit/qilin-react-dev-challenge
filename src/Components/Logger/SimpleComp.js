
import React from 'react';
import Logger from './Logger';

const SimpleComponent = () => {
  return <div>This is a simple component</div>;
};

const WrappedComponent = Logger(SimpleComponent);

const SimpleComp = () => {
  return (
    <div>
      <WrappedComponent />
    </div>
  );
};

export default SimpleComp;
