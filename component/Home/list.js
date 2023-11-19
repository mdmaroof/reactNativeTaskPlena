import { View, Text, FlatList, TouchableOpacity, Image } from "react-native"
import { FavoriteIcon1 } from "../../assets/svg/favouriteIcon"
import { GetDataContext } from "../../context/mainContext";
import { Plus } from "../../assets/svg/plusMinus";

export default List = ({ loading, data, navigation }) => {

    const { cartData, fav, setCartData ,setFav} = GetDataContext();

    const addToCart = (item) => {
        setCartData(prev => [...prev, { ...item, qty: 1 }])
    }

    const renderItemList = ({ item, index }) => {
        const favAdded = fav.some(z => z === item.id);

        return (
            <View
                style={{
                    flex: 1,
                    marginHorizontal: 4,
                    height: Platform.OS === 'ios' && 220 || 200,
                    borderRadius: 10,
                    backgroundColor: '#F8F9FB',
                    position: 'relative'
                }}
            >

                <TouchableOpacity
                    onPress={() => {
                        if (favAdded) {
                            setFav(prev => prev.filter(z => z !== item.id))
                        } else {
                            setFav(prev => [...prev, item.id])
                        }
                    }}
                    style={{ position: 'absolute', left: 0, top: 0, zIndex: 1, padding: 15 }}>
                    <FavoriteIcon1 fill={favAdded && '#ff0000' || "#fff"} />
                </TouchableOpacity>

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
                                <Plus color="#fff" size={30} />
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