import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../colors/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* My account top section */}
      <SafeAreaView>
        <View style={styles.topAccountWrapper}>
            <Text style={styles.topAccountTitle}>My account</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cyber
    },

    topAccountWrapper: {
        paddingHorizontal: 25,
        marginTop: 30
    },

    topAccountTitle: {
        color: colors.white,
        fontSize: 24,
        fontWeight: 'bold'
    }
})