import { TouchableOpacity, View, Text } from "react-native";

import { GetDataContext } from "../../context/mainContext";

export default Buttons = ({ data }) => {
    const { cartData, setCartData } = GetDataContext();

    const addedInCart = cartData.some(z => z.id === data?.id);
    return (
        <View style={{ flexDirection: 'row', gap: 10, paddingHorizontal: 20, marginVertical: 20 }}>

            {!addedInCart && (
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => setCartData(prev => [...prev, { ...data, qty: 1 }])}
                >
                    <View style={{
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#2A4BA0',
                        paddingVertical: 20,
                        borderRadius: 20,
                    }}>
                        <Text style={{ color: '#2A4BA0' }}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>
            )}

            {addedInCart && (
                <TouchableOpacity style={{ flex: 1 }}
                    onPress={() => setCartData(prev => prev.filter(x => x.id !== data.id))}
                >
                    <View style={{
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#2A4BA0',
                        paddingVertical: 20,
                        borderRadius: 20,
                    }}>
                        <Text style={{ color: '#2A4BA0' }}>Remove</Text>
                    </View>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    borderWidth: 1,
                    backgroundColor: '#2A4BA0',
                    paddingVertical: 20,
                    borderRadius: 20,
                    borderColor: '#2A4BA0'
                }}>
                    <Text style={{ color: '#fff' }}>Buy Now</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}