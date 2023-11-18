import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackChevron from '../assets/svg/backChevron';


export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}
            edges={['right', 'left', 'top']}
        >
            <View style={styles.container}>

                <View style={styles.topRow}>
                    {/* back Button */}
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.backButton} >
                            <BackChevron />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: 500 }}>Shopping Cart</Text>
                    </View>
                </View>

                <ScrollView style={{ flex: 1, marginBottom: 40 }}>

                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <View style={{
                            flexDirection: 'row',
                            paddingBottom: 20,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottomWidth: 1,
                            borderColor: '#EBEBFB'
                        }}>
                            <View>
                                <Text style={{ fontSize: 18 }}>Banana</Text>
                                <Text style={{ fontSize: 18 }}>$7.90</Text>
                            </View>

                            <View>
                                <Text>Banana</Text>
                                <Text>Banana</Text>
                            </View>
                        </View>
                    </View>


                </ScrollView>

                <View style={styles.footer}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Subtotal</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>$35</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Subtotal</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>$35</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Subtotal</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>$35</Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: '#2A4BA0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 20,
                        borderRadius: 20,
                        marginVertical: 20
                    }}>
                        <Text style={{ fontSize: 18, color: '#fff' }}>Proceed  To checkout</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    backButton: {
        justifyContent: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: 50,
        alignItems: 'center'
    },
    footer: {
        backgroundColor: '#F8F9FB',
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        gap: 15
    }
});