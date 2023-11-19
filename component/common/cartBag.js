import { TouchableOpacity, View, Text } from "react-native"

import CartBagIcon from '../../assets/svg/bag';
import { GetDataContext } from "../../context/mainContext";

export const CartBag = ({ navigation, color, borderColor = "#2A4BA0" }) => {
    
    const { cartData } = GetDataContext();

    return (
        <TouchableOpacity
            onPress={() => navigation.push('Cart')}
        >
            <View style={{ position: 'relative' }}>
                {cartData.length > 0 && (
                    <View style={{
                        position: 'absolute',
                        width: 20, height: 20,
                        backgroundColor: '#F9B023',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        zIndex: 1,
                        borderWidth: 1,
                        borderColor: borderColor,
                        right: -10,
                        top: -10,
                    }}>
                        <Text style={{ color: '#fff', fontSize: 10 }}>{cartData.length}</Text>
                    </View>
                )}
                <CartBagIcon color={color} />
            </View>
        </TouchableOpacity>
    )
}