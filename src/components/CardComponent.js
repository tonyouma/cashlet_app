import React from 'react';

import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// import Components from react native elements

import { Text, Icon, Divider } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';


// import Tailwind Css
import tw from 'tailwind-react-native-classnames';

import ButtonComponent from './ButtonComponent';

import { formatCurrency } from '../utils';

const CardComponent = ({ data }) => {

    const navigation = useNavigation();

    const handleGoalFinish = () => {
        console.log("Button Clicked")
    }

    const handleNavigation = (id) => {
        navigation.navigate('GoalDetails', { id });
    }

    return (
        <FlatList
            data={data}
            initialNumToRender={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.cardWrapper} >
                    <View style={tw.style('w-full rounded-sm flex flex-row justify-between px-4 items-center')}>
                        <View>
                            <Text style={tw`text-lg`}>Goal {item.id}</Text>
                            <Text style={tw`text-base text-gray-400`}>KSH {formatCurrency(item.amount)}</Text>
                        </View>
                        <View style={tw` flex flex-row items-center`}>
                            <ButtonComponent handlePress={handleGoalFinish} title="Finish Goal" />

                            <Divider orientation="vertical" style={tw`mx-4`} color="#000" />
                            <TouchableOpacity
                                onPress={() => handleNavigation(item.id)}
                            >
                                <Icon name='chevron-right' type='feather' color="black" size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            )}
        />
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        borderColor: '#F3F4F8',
        borderWidth: 1,
        borderRadius: 14,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});


export default CardComponent;
