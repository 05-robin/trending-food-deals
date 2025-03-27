
import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    ActivityIndicator
} from 'react-native';
import UseTrendingScreen from './UseTrendingScreen';
import CardComponent from '../../Components/CardComponent/CardComponent';
import { Dropdown } from 'react-native-element-dropdown';



const TrendingDealsScreen = () => {

    const { trendingDeals, selectedCategory, onChangeCategories } = UseTrendingScreen()

    const categories = [
        { label: 'All', value: 'All' },
        { label: 'Pizza', value: 'Pizza' },
        { label: 'Burgers', value: 'Burger' },
        { label: 'Drinks', value: 'Drink' },
    ];

    const showDeals = () => {
        if (trendingDeals!.length !== 0) {
            return <FlatList
                data={trendingDeals}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardComponent deal={item} />}
            />

        }
        return <Text style={{
            textAlign: 'center',
            fontSize: 16,
            color: 'gray',
            marginTop: 20
        }}>No deals available for this category.</Text>
    }

    return (
        <View>
            <View style={{ padding: 30 }}>
                <Dropdown
                    data={categories}
                    labelField="label"
                    valueField="value"
                    value={selectedCategory}
                    onChange={(item) => onChangeCategories(item.value)}
                    style={{
                        height: 50,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        borderRadius: 8,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        backgroundColor: 'white'
                    }}
                    placeholder="Select Category"
                    placeholderStyle={{ color: 'gray' }}
                    selectedTextStyle={{ fontSize: 16 }}
                />
                {
                    trendingDeals ? showDeals() : <ActivityIndicator size="large" color="#00ff00" />

                }

            </View>
        </View>
    )
}

export default TrendingDealsScreen