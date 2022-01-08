import React from 'react';

// import Button Component from react native elements

// import { Button } from 'react-native-elements';

// import Tailwind Css
import tw from 'tailwind-react-native-classnames';

/**
  
 */ 
const ToastComponent = () => {

  return (
    <Button
        title={title}
        buttonStyle={tw`rounded-full py-3`}
        containerStyle={{
            marginHorizontal: 50,
            marginVertical: 10,
        }}
        titleStyle={tw`font-light`}
        onPress={handlePress}
        />
  );
};


export default ToastComponent;
