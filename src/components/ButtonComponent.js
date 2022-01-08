import React from 'react';

// import Button Component from react native elements

import { Button } from 'react-native-elements';

// import Tailwind Css
import tw from 'tailwind-react-native-classnames';

/**
  ButtonComponent accepts two props:
  onPress function handler & title displayed on the button
 */
const ButtonComponent = ({ handlePress, title, rest }) => {

  return (
    <Button
      title={title}
      buttonStyle={tw`rounded-lg px-3 bg-green-300`}
      containerStyle={{
        // marginHorizontal: 50,
        marginVertical: 10,
      }}
      titleStyle={tw`font-light`}
      onPress={handlePress}
      {...rest}
    />
  );
};


export default ButtonComponent;
