import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

import TopHeader from '../component/Product/topHeader';
import Carousel from '../component/Product/carousel';
import Rating from '../component/Product/rating';
import Buttons from '../component/Product/buttons';

const TopHeading = ({ data }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text numberOfLines={1} style={{ fontSize: 50, fontWeight: 200 }}>
                {data?.brand}
            </Text>
            <Text
                numberOfLines={1}
                style={{ fontSize: 50, fontWeight: 500 }}
            >
                {data?.title}
            </Text>
        </View>
    )
}

const DetailSection = ({ data }) => {
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>Detail</Text>
            <Text style={{ color: '#8891A5', fontSize: 16 }}>{data?.description}</Text>
        </View>
    )
}

const Pricing = ({ data }) => {
    return (
        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 20, gap: 10, alignItems: 'center' }}>
            <Text style={{
                fontSize: 24,
                color: '#2A4BA0',
                fontWeight: 800
            }}>
                ${data?.price}
            </Text>
            <View style={{
                borderRadius: 20,
                backgroundColor: '#2A4BA0',
                paddingHorizontal: 10,
                paddingVertical: 4,
            }}
            >
                <Text style={{
                    fontSize: 12,
                    color: '#fff',
                }}>
                    {data?.discountPercentage}% OFF
                </Text>
            </View>
        </View>
    )
}

export default function Product({ navigation, route, }) {
    const { params } = route;
    const { id } = params;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const result = await response.json();
            setData(result);
        } catch (err) {
            // console.log(err)
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                {loading && <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}><Text>Loading</Text></View>}
                {!loading && (
                    <>
                        <TopHeader navigation={navigation} />
                        <TopHeading data={data} />
                        <Rating data={data} />
                        <Carousel data={data} />
                        <Pricing data={data} />
                        <Buttons data={data} navigation={navigation} />
                        <DetailSection data={data} />
                    </>
                )}

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

});