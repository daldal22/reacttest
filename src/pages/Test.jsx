import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    console.log('컴포넌트가 마운트됨');
    return () => {
      console.log('컴포넌트가 언마운트됨');
    };
  }, []);

  return <div>안녕, 리액트!</div>;
}

export default ExampleComponent;
