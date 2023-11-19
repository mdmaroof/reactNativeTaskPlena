import { StyleSheet, TouchableOpacity, View } from "react-native";

import BackChevron from "../../assets/svg/backChevron";
import { CartBag } from "../common/cartBag";

export default TopHeader = ({ navigation }) => {
    return (
        <View style={styles.topRow}>
            {/* back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <View style={styles.backButton} >
                    <BackChevron />
                </View>
            </TouchableOpacity>

            <View>
                <CartBag navigation={navigation} borderColor="#fff" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    backButton: {
        justifyContent: 'center',
        backgroundColor: '#F8F9FB',
        borderRadius: 50,
        alignItems: 'center'
    },
})