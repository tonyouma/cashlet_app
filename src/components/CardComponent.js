import React from 'react';

import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// import Components from react native elements

import { Text, Icon, Divider } from 'react-native-elements';


// import Tailwind Css
import tw from 'tailwind-react-native-classnames';

import ButtonComponent from './ButtonComponent'


/**
  ButtonComponent accepts two props:
  onPress function handler & title displayed on the button
 */
const CardComponent = ({ data }) => {

    const handleGoalFinish = () => {
        console.log("Button Clicked")
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

                <TouchableOpacity>
                    <View>
                        <View style={tw.style('w-full rounded-sm flex flex-row justify-between pb-6')}>
                            <View>
                                <Text style={tw`text-xl`}>Goal {item.id}</Text>
                                <Text style={tw`text-base text-gray-400`}>KSH {item.amount}</Text>
                            </View>
                            <View style={tw` flex flex-row items-center`}>
                                <ButtonComponent handlePress={handleGoalFinish} title="Finish Goal" />

                                <Divider orientation="vertical" style={tw`mx-4`} color="#000" />
                                <Icon name='arrowright' type='antdesign' color="black" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            )}
        />
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: "#485A7C",
        height: "100%"
    }
});


export default CardComponent;
