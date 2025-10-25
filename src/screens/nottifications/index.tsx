import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenStyle } from '../../styles/defaultScreenStyle'
import NotificationsCard from '../../components/notifications/notificationsCard'

const Notifications:React.FC = () => {

    const notifications=[
        {
        id:1,
        title:"Film 1",
        body:"Film Uygulamaya Yeni Eklendi",
        show:false
    },
    {
        id:2,
        title:"Film 2",
        body:"Film Uygulamaya Yeni Eklendi",
        show:true
    },
    {
        id:3,
        title:"Film 3",
        body:"Film Uygulamaya Yeni Eklendi",
        show:true
    },
    {
        id:4,
        title:"Film 4",
        body:"Film Uygulamaya Yeni Eklendi",
        show:false
    },
    
]
  return (
    <View style={ScreenStyle.container}>
     <FlatList
     data={notifications}
     renderItem={({item})=><NotificationsCard notification={item}/>}
     />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})