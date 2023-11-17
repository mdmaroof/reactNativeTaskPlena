import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const dataCarousel = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
];

export default function Home({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.item}
        >
            <View style={{ flex: 1, justifyContent: 'center' }}>

                <Text>{item.text}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', gap: 2 }}>

                <Text style={{ color: '#fff', fontSize: 25 }}>Get</Text>
                <Text style={{ color: '#fff', fontSize: 30, fontWeight: 600 }}>50% OFF</Text>
                <Text style={{ color: '#fff', fontSize: 16 }}>On First 03 Order</Text>
            </View>
        </TouchableOpacity>
    );

    const renderItemList = ({ item, index }) => {
        return (
            <View style={{ borderWidth: 1, flex: 1, marginHorizontal: 4, height: 180, borderRadius: 10, padding: 10 }}>
                <Text>Maroof</Text>
            </View>
        )
    }

    const fetchData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            setData(result.products);
        } catch (err) {
            console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#2A4BA0' }}>
            <View style={styles.container}>
                <ScrollView

                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}
                >

                    {/* Welocme and cart */}
                    <View>
                        <View style={styles.topRow}>
                            <Text style={styles.welcomeText}>Hey,Rahul</Text>
                            <Text>Hey,Rahul</Text>
                        </View>
                    </View>

                    {/* search */}
                    <View style={{ paddingTop: 40, paddingBottom: 10, paddingHorizontal: 60, backgroundColor: '#2A4BA0' }}>
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

                    {/* carousel */}
                    <View>
                        <FlatList
                            data={dataCarousel}
                            renderItem={renderItem}
                            horizontal
                            // pagingEnabled

                            snapToAlignment={'center'}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                        />
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 30 }}>Recommended</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        <FlatList
                            data={data}
                            renderItem={renderItemList}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            scrollEnabled={false}
                            onEndReachedThreshold={0.1}
                            contentContainerStyle={{ gap: 10 }}
                        // ListFooterComponent={loading && <ActivityIndicator size="small" color="#0000ff" />}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    topRow: {
        backgroundColor: '#2A4BA0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
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
    },

    item: {
        backgroundColor: '#F9B023',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: 300,
        height: 150,
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
    },

});