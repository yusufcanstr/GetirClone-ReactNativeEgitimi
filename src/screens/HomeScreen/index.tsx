import { Image, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

export default function index() {
    return (
        <View style={styles.headerMain}>
            {/* adres */}
            <View style={styles.headerOne}>
                <Image style={styles.image} source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }} />
                <View style={styles.headerOneView}>
                    <Text style={{ fontWeight: "600", fontSize: 16 }}>Ev</Text>
                    <Text style={{ fontWeight: "500", fontSize: 12, color: "#6E7480", marginLeft: 6, marginRight: 1 }}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
                    <Entypo testID="right-icon" name="chevron-right" size={22} color="#5D3EBD" />
                </View>
                <View style={styles.headerTwo}>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: "#5D3EBD" }}>TVS</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: "#5D3EBD" }}>
                        18<Text style={{ fontSize: 16, color: "#5D3EBD" }}>dk</Text>
                    </Text>
                </View>
            </View>

            <View>

            </View>
        </View>
    )
}

