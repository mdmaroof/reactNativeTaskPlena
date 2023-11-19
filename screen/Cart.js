import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GetDataContext } from '../context/mainContext';
import BackChevron from '../assets/svg/backChevron';
import { Plus, Substract } from '../assets/svg/plusMinus';


export default function Cart({ navigation }) {
    const { cartData, setCartData } = GetDataContext();

    const substract = (id) => {
        const checkQty = cartData.find(z => z.id === id);
        if (checkQty.qty === 1) {
            setCartData(prev => prev.filter(z => z.id !== id));
            return
        }

        setCartData(prev => {
            const updatedArray = [...prev];
            const index = updatedArray.findIndex(item => item.id === id);
            if (index !== -1) {
                updatedArray[index] = { ...updatedArray[index], qty: updatedArray[index].qty - 1 };
                return updatedArray
            }
        })
    }

    const addition = (id) => {
        setCartData(prev => {
            const updatedArray = [...prev];
            const index = updatedArray.findIndex(item => item.id === id);
            if (index !== -1) {
                updatedArray[index] = { ...updatedArray[index], qty: updatedArray[index].qty + 1 };
                return updatedArray
            }
        })
    }

    const renderItem = ({ item, index }) => (
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <View style={{
                flexDirection: 'row',
                paddingBottom: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderColor: '#EBEBFB'
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Image
                            style={{ width: 35, height: 35, marginRight: 10, resizeMode: 'cover' }}
                            source={{ uri: item.thumbnail }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>{item.title}</Text>
                        <Text style={{ fontSize: 18, fontWeight: '300' }}>${item.price.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                    <TouchableOpacity onPress={() => substract(item.id)} >
                        <View style={styles.addedSubstractButton}>
                            <Substract />
                        </View>
                    </TouchableOpacity>
                    <Text>{item.qty}</Text>
                    <TouchableOpacity onPress={() => addition(item.id)} >
                        <View style={styles.addedSubstractButton}>
                            <Plus />
                        </View>
                    </TouchableOpacity>


                </View>
            </View>
        </View>

    )

    const subtotal = () => {
        return cartData.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
    }
    const deliveryCharge = cartData.length > 0 && 5 || 0;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}
            edges={['right', 'left', 'top']}
        >
            <View style={styles.container}>

                <View style={styles.topRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <View style={styles.backButton} >
                            <BackChevron />
                        </View>
                    </TouchableOpacity>

                    <View>
                        <Text style={{ marginLeft: 15, fontSize: 18, fontWeight: 500 }}>Shopping Cart ({cartData.length})</Text>
                    </View>


                </View>

                {cartData.length > 0 && (
                    <View style={{ flex: 1, marginBottom: 40 }}>
                        <FlatList
                            data={cartData}
                            renderItem={renderItem}
                            snapToAlignment={'center'}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                )}

                {cartData.length === 0 && (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Empty Cart</Text>
                    </View>
                )}

                <View style={styles.footer}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Subtotal</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>${subtotal().toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Delivery</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>${deliveryCharge.toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, color: '#616A7D' }}>Total</Text>
                        <Text style={{ color: '#1E222B', fontSize: 20 }}>${(subtotal() + deliveryCharge).toFixed(2)}</Text>
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
        alignItems: 'center',
    },
    addedSubstractButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: 50,
        width: 40,
        height: 40
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