import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { ToastProvider } from "react-native-toast-notifications";

import { Icon } from 'react-native-elements';

import tw from 'tailwind-react-native-classnames';

const Snackbar = ({ children }) => {
    return (
        <ToastProvider
            placement="top"

            offset={10}
            renderType={{
                with_close_button: (toast) => (
                    <View
                        style={[tw`items-center`, {
                            maxWidth: "85%",
                            paddingVertical: 10,
                            backgroundColor: "#e91780",
                            marginVertical: 4,
                            borderRadius: 8,
                            justifyContent: "space-between",
                            paddingHorizontal: 16,
                            flexDirection: "row",
                            color: '#fff'
                        }]}
                    >
                        <Text style={[tw`text-white`, { marginRight: 16 }]}>{toast.message}</Text>
                        <TouchableOpacity
                            onPress={() => toast.onHide()}
                            style={{
                                marginLeft: "auto",

                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "500", marginBottom: 2.5 }}>
                                <Icon type="feather" size={28} name="x" />
                            </Text>
                        </TouchableOpacity>
                    </View>
                ),
            }}
        >
            {children}
        </ToastProvider>
    )
}

export default Snackbar

const styles = StyleSheet.create({})
