import { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    RefreshControl,
} from 'react-native';

import TopBox, { HeaderBox } from '../component/Home/topBox';
import Carousel from '../component/Home/carousel';
import { GetDataContext } from '../context/mainContext';
import List from '../component/Home/list';


export default function Home({ navigation }) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
                    <HeaderBox navigation={navigation} />
                    <TopBox />
                    <Carousel />
                    <List loading={loading} data={data} navigation={navigation} />

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