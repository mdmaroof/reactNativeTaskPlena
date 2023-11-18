import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import BrokenImage from "../../assets/svg/brokenImage";

export default Carousel = () => {
    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            style={styles.item}
        >
            <View style={styles.row}>
                <BrokenImage color='#fff' />
            </View>
            <View style={styles.text}>
                <Text style={{ color: '#fff', fontSize: 25 }}>Get</Text>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 600 }}>50% OFF</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>On First 03 Order</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ paddingVertical: 20 }}>
            <FlatList
                data={Array(3).fill(null)}
                renderItem={renderItem}
                horizontal
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F9B023',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: 300,
        height: 150,
        flexDirection: 'row',
    },
    row: {
        justifyContent: 'center',
        paddingLeft: 15,
        marginRight: 25
    },
    text: { flex: 1, justifyContent: 'center', gap: 2 }
})