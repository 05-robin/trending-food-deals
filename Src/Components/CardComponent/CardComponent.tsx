import React from "react";
import { DealBO } from "../../Interface/DealBO/DealBO";
import {
    View,
    Text,
    Image
} from 'react-native';


interface CardProps {
    deal: DealBO;
}

const CardComponent: React.FC<CardProps> = ({ deal }) => {

    return (
        <View style={{
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 8,
            marginBottom: 12,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 4,
        }}>
            <Image source={{ uri: deal.image }} style={{
                width: 200,
                height: 150,
                borderRadius: 8,
                resizeMode: 'contain',
            }} />
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 8,
            }}>{deal.title}</Text>
            <Text style={{
                fontSize: 14,
                color: 'gray',
            }}>{deal.restaurant}</Text>
            <Text style={{
                fontSize: 14,
                color: 'red',
            }}>{deal.discount}</Text>
        </View>
    )

}

export default CardComponent