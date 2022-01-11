import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';


const GoalDetails = () => {
    return (
        <SafeAreaView style={[tw`px-10 py-20`, {}]}>
            <View>
                <Text style={tw`text-2xl font-bold`}>Goal Details</Text>
            </View>

        </SafeAreaView>
    )
}

export default GoalDetails

const styles = StyleSheet.create({})
