import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommend from '../components/Recommend'

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF', }}>
            <View style={styles.header}>
                <View style={ styles.inputArea}>
                    <Feather name="search" size={24} color="#000"/>
                    <TextInput placeholder="O que está procurando?" style={styles.input}/>
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <New 
                    cover={require('../assets/house1.jpg')}
                    name="Casa Praia Grande"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1400,00"
                    onPress={() => navigation.navigate('detail')}
                />

                <New 
                    cover={require('../assets/house2.jpg')}
                    name="Casa Ubatuba"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1100,00"
                    onPress={() => navigation.navigate('detail')}
                />

                <New 
                    cover={require('../assets/house3.jpg')}
                    name="Casa Paraty"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1330,00"
                    onPress={() => navigation.navigate('detail')}
                />

                <New 
                    cover={require('../assets/house4.jpg')}
                    name="Casa Floripa"
                    description="Casa nova uma quadra do mar, lugar seguro e monitorado 24horas."
                    price="R$ 1200,00"
                    onPress={() => navigation.navigate('detail')}
                />
            </ScrollView>

            <View style={{flexDirection: 'row', marginBottom: 10, alignItems: 'center'}}>
                <Text style={[styles.title, { marginTop: 20 }]}>Próximo a você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <House
                    cover={require('../assets/house4.jpg')}
                    description="Casa muito bonita na praia, com vista para o mar, aberta 24 horas."
                    price="R$ 1220,00"
                    onPress={() => navigation.navigate('detail')}
                />

                <House
                    cover={require('../assets/house5.jpg')}
                    description="Casa muito bonita na praia, com vista para o mar, aberta 24 horas."
                    price="R$ 950,00"
                    onPress={() => navigation.navigate('detail')}
                />

                <House
                    cover={require('../assets/house6.jpg')}
                    description="Casa muito bonita na praia, com vista para o mar, aberta 24 horas."
                    price="R$ 1099,00"
                    onPress={() => navigation.navigate('detail')}
                />
            </ScrollView>
            
            <Text style={[styles.title, { marginTop: 20 }]}>
                Dica do dia
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
                <Recommend 
                    cover={require('../assets/house1.jpg')}
                    house="Casa Floripa"
                    offer="20%"
                    onPress={() => navigation.navigate('detail')}
                />

                <Recommend 
                    cover={require('../assets/house2.jpg')}
                    house="Casa Ubatuba"
                    offer="20%"
                    onPress={() => navigation.navigate('detail')}
                />

                <Recommend 
                    cover={require('../assets/house3.jpg')}
                    house="Casa Paraty"
                    offer="20%"
                    onPress={() => navigation.navigate('detail')}
                />
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:{
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },

    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
    },

    input:{
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },

    contentNew:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
    },

    title:{
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color:'#4f4a4a'
    }
})