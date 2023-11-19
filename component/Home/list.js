import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import { FavoriteIcon1 } from "../../assets/svg/favouriteIcon"
import { GetDataContext } from "../../context/mainContext";

export default List = ({ loading, data, navigation }) => {

    const { cartData, setCartData } = GetDataContext();

    const addToCart = (item) => {
        setCartData(prev => [...prev, item])
    }

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

                <View style={{ position: 'absolute', left: 15, top: 15, zIndex: 1 }}>
                    <FavoriteIcon1 fill="#fff" />
                </View>

                <TouchableOpacity
                    onPress={() => navigation.push('Product', { id: item.id })}
                    style={{ alignItems: 'center', flex: 1 }}>
                    <Image
                        style={{ width: '100%', height: '100%', resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        source={{ uri: item.thumbnail }}
                    />
                </TouchableOpacity>

                <View style={{ marginVertical: 10, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={() => navigation.push('Product', { id: item.id })}
                        style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 700, marginBottom: 2 }}>${item.price}</Text>
                        <Text numberOfLines={1} style={{ color: '#616A7D' }}>{item.title}</Text>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20 }}>

                        {!cartData.some(z => z.id === item.id) && (
                            <TouchableOpacity
                                onPress={() => addToCart(item)}
                                style={{
                                    borderRadius: 50,
                                    width: 35,
                                    height: 35,
                                    backgroundColor: '#2A4BA0',
                                    position: 'relative',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 25,
                                    textAlign: 'center'
                                }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        )}

                        {cartData.some(z => z.id === item.id) && (
                            <View style={{ backgroundColor: '#2A4BA0', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20 }}>
                                <Text style={{ color: '#fff' }}>Added</Text>
                            </View>
                        )}
                    </View>

                </View>
            </View >
        )
    }

    return (
        <>
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
                    />
                )}
            </View>
        </>
    )
}