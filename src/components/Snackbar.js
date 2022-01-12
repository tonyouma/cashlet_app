import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { ToastProvider } from "react-native-toast-notifications";

import { Icon } from 'react-native-elements';

import tw from 'tailwind-react-native-classnames';

const Snackbar = ({ children }) => {

    return (
        <ToastProvider
            placement="top"
            offset={10}
            renderType={{
                popup: (toast) => (
                    <View
                        style={[tw`items-center justify-between  mx-4 rounded-xl flex-row my-2 py-6 px-4`, {
                            backgroundColor: "#e91780",
                        }]}
                    >
                        <Text style={tw`text-white mr-8`}>{toast.message}</Text>
                        <TouchableOpacity
                            onPress={() => toast.onHide()}
                            style={tw` ml-auto `}
                        >
                            <Icon type="feather" size={28} name="x" color="#fff" />
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

