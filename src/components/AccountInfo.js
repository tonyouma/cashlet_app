import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import tw from 'tailwind-react-native-classnames';

// import utilities
import { getInitials, getGreeting, formatCurrency } from '../utils';
const AccountInfo = ({ user }) => {

    return (
        <View style={tw`px-10 py-14`}>
            <Text style={tw`text-white text-2xl font-normal `}>
                <Text>{getGreeting()}</Text>
                <Text style={tw`font-bold`}> {getInitials(user.name)}</Text>
            </Text>
            <Text style={tw`text-white text-base font-light py-2`}>Here's the latest</Text>
            <Text style={tw`text-green-500 text-4xl font-semibold pt-2`}>
                {`KES ${formatCurrency(user.totalFunds)}`}</Text>
            <Text style={tw`text-white text-base font-light`}>Total Funds</Text>
        </View>
    )
}

export default AccountInfo

const styles = StyleSheet.create({})
