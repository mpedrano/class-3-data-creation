import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FAB, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {
    const [number, setNumber] = useState(1);

    const check = () => {
        console.log("clicked");
        if(number == 1) {
          console.log("ONE");
        } else if (number == 2) {
          console.log("TWO")
        } 
        setNumber(number + 1);
    }

    const next = () => {
        navigation.push('About')
    }

    return (
        <SafeAreaView style={styles.container}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} style={styles.load}/>
            <TouchableOpacity   onPress={() => check()} 
                                style={ number === 1 ? styles.btnBlue : 
                                        number === 2? styles.btnRed : styles.btnGreen }>
                <Text>Change color</Text>
            </TouchableOpacity>
            <FAB
                icon="arrow-right"
                style={styles.fab}
                onPress={() => next()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnBlue: {
        alignItems: 'center',
        backgroundColor: '#63C5DA',
        borderColor: '#63C5DA',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnRed: {
        alignItems: 'center',
        backgroundColor: '#800000',
        borderColor: '#800000',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    btnGreen: {
        alignItems: 'center',
        backgroundColor: '#00563B',
        borderColor: '#00563B',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10
    },
    fab: {
        margin: 15
    },
    load:{
        margin: 20
    },
});
