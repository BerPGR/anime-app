import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { BlurView } from 'expo-blur'

import { Ionicons, FontAwesome5 } from '@expo/vector-icons'

import colors from '../colors/colors'

const Home = () => {
  return (
    <View style={styles.container}>
        {/* Header Section */}
        <BlurView style={styles.headerWrapper} tint="light" intensity={60}>
            <Ionicons name='person' size={28} color={colors.black}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name='chromecast' size={28} color={colors.black}/>
                <FontAwesome5 name='search' size={24} color={colors.black} style={{marginLeft: 20}}/>
            </View>
        </BlurView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cyber
    },

    headerWrapper: {
        paddingTop: 60,
        paddingBottom: 5,
        paddingHorizontal: 25,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})