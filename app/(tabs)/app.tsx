import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={style.container}>
            <ImageBackground style={style.image} source={require('../../assets/images/bg-start.png')} >
                <Text style={style.tittle}>RunFlow</Text>
                <Text style={style.text}>Seu progresso começa com o primeiro passo. Corra e evolua!</Text>
                <Button title="Button"/>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232323',
    },

    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 80,
        gap: 25
    },
    tittle: {
        fontSize: 30,
        fontWeight: 'semibold',
        color: '#fff'
    },
    text: {
        fontSize: 14,
        fontWeight: 'regular',
        color: '#fff'
    }
})