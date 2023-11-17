import { Button, StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2A4BA0' }}>
            <View style={styles.container}>

                {/* Welocme and cart */}
                <View style={styles.topContainer}>

                    <View style={styles.topRow}>
                        <Text style={styles.welcomeText}>Hey,Rahul</Text>
                        <Text>Hey,Rahul</Text>
                    </View>
                </View>

                {/* search */}
                <View style={{ paddingTop: 50, paddingBottom: 10, paddingHorizontal: 40, backgroundColor: '#2A4BA0' }}>
                    <TextInput
                        placeholderTextColor="#8891A5"
                        style={styles.searchInput} value={''} placeholder="useless placeholder" />
                </View>

                {/* Address and time */}
                <View style={{ paddingBottom: 15, paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, backgroundColor: '#2A4BA0' }}>
                    <View>
                        <Text style={{ color: '#F8F9FB', textTransform: 'uppercase', fontSize: 12 }}>Delivery to</Text>
                        <Text style={{ color: '#ffffff', paddingTop: 5, fontSize: 18 }}>MAroof</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#F8F9FB', textTransform: 'uppercase', fontSize: 12 }}>Within</Text>
                        <Text style={{ color: '#ffffff', paddingTop: 5, fontSize: 18 }}>MAroof</Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <Text>Maroof</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topContainer: {
        backgroundColor: '#2A4BA0',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 10,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 28
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 10,
        color: '#ffffff',
        borderRadius: 50,
        fontSize: 16
    }


});