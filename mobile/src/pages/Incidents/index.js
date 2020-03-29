import React, {useEffect, useState} from 'react';
import { View, Text, Image, TouchableOpacity, FlatList  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import style from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api/api'

export default function Incidents(){
    const navigation = useNavigation();
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    function goToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

   async function loadIncidents(){
       if(loading){
        return;
       }
       if (total > 0 && incidents.length == total){
        console.log('888888888888888888888888888888888888888888888888888888888888888888888888888');
        return;
       }
       console.log('666666666666666666666666666666666666666666666666666666666666666666666666');
    
       setLoading(true);

        const response = await api.get('incidents',{
                    params:{page}
                    });

    setIncidents([...incidents,...response.data]);
    setTotal(response.headers["x-total-count"]);
  
    setPage(page + 1);
    setLoading(false);
    return;
    }

useEffect(()=>{
    loadIncidents()
},{});

    return(
        <View style={style.container}>
            <View style={style.header}>
                <Image source={logo} />
                <Text style={style.headerText}>
                    Total de <Text style={style.headerTextBold}>{total} Casos</Text>
                </Text>
            </View>

            <Text style={style.title}>
                Bem Vindo
            </Text>
            <Text style={style.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>
            <FlatList 
                style={style.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={true}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.3}
                renderItem={({item: incident}) =>(

                <View style={style.incident}>
                    <Text style={style.incidentProperty}>Ong: </Text>
                    <Text style={style.incidentValue}>{incident.name} </Text>

                    <Text style={style.incidentProperty}>Caso: </Text>
                    <Text style={style.incidentValue}>{incident.title} </Text>

                    <Text style={style.incidentProperty}>Valor: </Text>
                    <Text style={style.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style:'currency', 
                            currency:'BRL'
                            }).format(incident.value)} 
                    </Text>
                    <TouchableOpacity style={style.detailsButton} onPress={()=>goToDetail(incident)}>
                        <Text style={style.detailsButtonText}> 
                            Ver Mais Detalhes
                        </Text>
                        <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>

                    )}     
                />



        </View>
    );
}