import React from 'react'
import { Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlurView } from 'expo-blur'

import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons'
import colors from '../colors/colors'
import newAnime from '../images/chainsaw.jpeg'
import newAnimeLogo from '../images/chainsawManTitle.png'

const height = Dimensions.get("window").height

const Home = ({navigation}) => {
    return (
    <View style={styles.container}>
        {/* Header Section */}
        <BlurView style={styles.headerWrapper} tint="light" intensity={30}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Ionicons name='person' size={28} color={colors.white}/>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome5 name='chromecast' size={28} color={colors.white}/>
                <FontAwesome5 name='search' size={24} color={colors.white} style={{marginLeft: 20}}/>
            </View>
        </BlurView>
        

        <ScrollView>
        {/* News Section */}
            <View>
                <ImageBackground
                    source={newAnime}
                    style={styles.backgroundImage}
                >
                </ImageBackground>
                <View style={styles.watchNew}>
                    <Image source={newAnimeLogo} style={styles.newAnimeLogoPicture}/>
                    <TouchableOpacity style={styles.watchNowButton}>
                        <Feather name='play' size={20}/>
                        <Text style={styles.watchNewText}>Watch Now!</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
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
        paddingBottom: 7,
        paddingHorizontal: 25,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    backgroundImage: {
        height: height * 0.65
    },

    watchNew: {
        paddingHorizontal: 20,
        backgroundColor: colors.space,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    newAnimeLogoPicture: {
        resizeMode: 'contain',
        width: 140,
        height: 70
    },

    watchNowButton: {
        backgroundColor: colors.yellow,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 20
    },

    watchNewText: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold'
    }
})