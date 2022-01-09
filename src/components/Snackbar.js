import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Tooltip } from 'react-native-elements'

const Snackbar = ({ open }) => {
    return (
        <Tooltip visible={open}>
            <Text>Hello</Text>
        </Tooltip>
    )
}

export default Snackbar

const styles = StyleSheet.create({})
