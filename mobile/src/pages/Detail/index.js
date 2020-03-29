import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking  } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import style from './styles'
import logo from '../../assets/logo.png'

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const msg = `Ola ${incident.name}, estou entrando em contato pois, gostaria de ajudar no ${incident.title} com ${Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(incident.value)}`


    function goBack(){
        navigation.goBack();
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}?&text=${msg}`)
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói do caso: ${incident.title}`,
            recipients:[incident.email],
            body: msg,
        });
    }

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo}/>
                <TouchableOpacity onPress={goBack}>
                    <Feather name="arrow-left" size={28} color="#e82041"/>
                </TouchableOpacity>
            </View>
            
            <View style={style.incident}>
                <Text style={[style.incidentProperty, {marginTop:0}]}>Ong: </Text>
                <Text style={style.incidentValue}>{incident.name} {incident.city}/{incident.uf}</Text>

                <Text style={style.incidentProperty}>Caso </Text>
                <Text style={style.incidentValue}>{incident.description}</Text>

                <Text style={style.incidentProperty}>Valor </Text>
                <Text style={style.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style:'currency', 
                            currency:'BRL'
                            }).format(incident.value)} 
                </Text>
                
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>
                    Salve o Dia!!!
                </Text>
                <Text style={style.heroTitle}>
                    Seja o Herói desse caso.
                </Text>
                <Text style={style.heroDescription}>
                    Emtre em contato:
                </Text>
                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhatsApp}>
                        <Text style={style.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendMail}>
                        <Text style={style.actionText}>Email</Text>
                    </TouchableOpacity>

                </View>
            </View>



        </View>
    );
}