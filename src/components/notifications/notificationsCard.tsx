import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NotificationCardProps } from '../../models/uı/notificationCardProps';
import { Notification } from 'iconsax-react-native';

const NotificationsCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  return (
    <Pressable style={styles.container}>
      <View style={{ paddingHorizontal: 12 }}>
        <Notification color="white" size={30} />
      {
        notification.show && (
            <View
            style={{
              backgroundColor: 'red',
              width: 12,
              height: 12,
              borderRadius: 100,
              position: 'absolute',
              right: 15,
              top: 2,
            }}
          />
        )
      }
      </View>

      <View style={{ gap: 8 }}>
        <Text style={{ color: 'white', fontSize: 24 }}>
          {notification.title}
        </Text>
        <Text style={{ color: 'gray', fontSize: 18 }}>{notification.body}</Text>
      </View>
    </Pressable>
  );
};

export default NotificationsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
});
