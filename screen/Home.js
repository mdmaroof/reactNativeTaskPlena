import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    FlatList,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    Image
} from 'react-native';
import BrokenImage from '../assets/svg/brokenImage';
import SearchButton from '../assets/svg/searchButton';

import { FavoriteIcon1 } from '../assets/svg/favouriteIcon';
import { CartBag } from '../component/common/cartBag';
import TopBox, { HeaderBox } from '../component/Home/topBox';
import Carousel from '../component/Home/carousel';


export default function Home({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const renderItemList = ({ item, index }) => {
        return (
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 4,
                    height: 200,
                    borderRadius: 10,
                    backgroundColor: '#F8F9FB',
                    position: 'relative'
                }}
            >
                <TouchableOpacity
                    onPress={() => alert('hello')}
                    style={{ position: 'absolute', left: 15, top: 15, zIndex: 1 }}>
                    <View >
                        <FavoriteIcon1 fill="#fff" />
                    </View>
                </TouchableOpacity>

                <View
                    onPress={() => navigation.push('Product', { id: item.id })}
                    style={{ alignItems: 'center', flex: 1 }}>
                    <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        source={{ uri: item.thumbnail }}
                    />
                </View>
                <View style={{ marginVertical: 10, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.push('Product', { id: item.id })}
                        style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>${item.price}</Text>
                        <Text numberOfLines={1} style={{ color: '#616A7D' }}>{item.title}</Text>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20 }}>

                        <TouchableOpacity style={{
                            borderRadius: 50,
                            width: 35,
                            height: 35,
                            backgroundColor: '#2A4BA0',
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 25,
                                textAlign: 'center'
                            }}>
                                +
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View >
        )
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/products');
            const result = await response.json();
            setData(result.products);
        } catch (err) {
            // console.log(err)
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
                    refreshControl={
                        <RefreshControl refreshing={loading} onRefresh={() => fetchData()} />
                    }
                    stickyHeaderIndices={[0]}
                    showsVerticalScrollIndicator={false}
                >
                    <HeaderBox />
                    <TopBox />
                    <Carousel />

                    <View style={{ marginBottom: 10, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 30 }}>Recommended</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        {loading && (<Text style={{ textAlign: 'center' }}>Loading</Text>)}
                        {!loading && (
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
                        )}
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

    text: {
        fontSize: 18,
    },

});