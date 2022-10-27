import React from 'react'
import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BlurView } from 'expo-blur'

import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons'
import colors from '../colors/colors'
import newAnime from '../images/chainsaw.jpeg'
import newAnimeLogo from '../images/chainsawManTitle.png'
import newAnimes from '../data/newAnimes'
import topAnimes from '../data/topAnimes'
import imageBanner from '../images/spyFamilyBanner.jpg'
import miniImage from '../images/spyfamilyMini.jpg'

const height = Dimensions.get("window").height

const Home = ({navigation}) => {

    const renderTopAnimes = ({item}) => {
        {/* Same design as renderNewAnimes FLatList */}
        return (
            <TouchableOpacity style={[styles.newAnimesItemWrapper, {
                marginRight: item.id === 'top-10' ? 0 : 10
            }]}>
                <Image source={item.image} style={styles.newAnimeItemImage}/>
                <View style={styles.newAnimeItemImageInfo}>
                    <Text style={styles.newAnimeItemTitle}>{item.title}</Text>
                    <Text style={styles.newAnimeItemType}>{item.type}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderNewAnimes = ({item}) => {
        return (
            <TouchableOpacity style={[styles.newAnimesItemWrapper, {
                marginRight: item.id === 'new-7' ? 0 : 10
            }]}>
                <Image source={item.image} style={styles.newAnimeItemImage}/>
                <View style={styles.newAnimeItemImageInfo}>
                    <Text style={styles.newAnimeItemTitle}>{item.title}</Text>
                    <Text style={styles.newAnimeItemType}>{item.type}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
    <View style={styles.container}>
        {/* Header Section */}
        <BlurView style={styles.headerWrapper} tint="dark" intensity={30}>
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

            <View style={styles.newAnimesWrapper}>
                <Text style={styles.newAnimesTitle}>New animes!</Text>
                <FlatList 
                    data={newAnimes}
                    renderItem={renderNewAnimes}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.topTenWrapper}>
                <Text style={styles.topTenTitle}>Top 10 most watched!</Text>
                <FlatList 
                    data={topAnimes}
                    renderItem={renderTopAnimes}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.oneAnimeWrapper}>
                <View style={styles.oneAnimeBanner}>
                    <Image source={imageBanner} style={styles.bannerImage}/>
                    <View style={styles.oneImageInfoWrapper}>
                        <Image source={miniImage} style={styles.miniImageBanner}/>
                        <Text style={styles.oneImageTitle}>Spy X Family</Text>
                        <Text style={styles.oneImageSinopsis}>A spy who has to "build a family" 
                            to execute a mission, not realizing that the girl he adopts as his 
                            daughter is a telepath, and the woman he agrees to be in a marriage 
                            with is a skilled assassin.
                        </Text>
                        <Text style={styles.oneImageType}>Series</Text>
                    </View>
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
        backgroundColor: colors.cyber,
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
        paddingHorizontal: 20,
        borderRadius: 5
    },

    watchNewText: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold'
    },

    newAnimesWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },

    newAnimesTitle: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
    },

    newAnimesItemWrapper: {
        marginTop: 10,
    },

    newAnimeItemImage: {
        width: 160,
        height: 230,
    },

    newAnimeItemImageInfo: {
        backgroundColor: colors.gunmetal,
        width: 160,
        height: 70
    },

    newAnimeItemTitle: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 5,
        width: '80%'
    },

    newAnimeItemType: {
        color: colors.lightGreen,
        position: 'absolute',
        fontWeight: '600',
        top: 47,
        left: 5
    },

    topTenWrapper: {
        marginTop: 20,
        paddingHorizontal: 20
    },

    topTenTitle: {
        marginTop: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
    },

    oneAnimeWrapper: {
        paddingHorizontal: 20,
        marginTop: 40,
        paddingBottom: 20
    },

    bannerImage: {
        resizeMode: 'contain',
        width: '100%',
        height: 210
    },

    oneImageInfoWrapper: {
        backgroundColor: colors.gunmetal,
        width: '100%',
        height: 120
    },

    miniImageBanner: {
        resizeMode: 'contain',
        width: 105,
        height: 240,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 3,
        position: 'absolute',
        bottom: -30,
        left: 30
    },

    oneImageTitle: {
        position: 'absolute',
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.white,
        left: 145,
        top: 5
    },

    oneImageSinopsis: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.white,
        left: 145,
        top: 25,
        width: '55%',
    },

    oneImageType: {
        color: colors.lightGreen,
        position: 'absolute',
        fontWeight: '600',
        top: 97,
        left: 320
    }
})