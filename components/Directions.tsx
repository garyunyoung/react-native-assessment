import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from '../styles/SharedStyle'

export default function Directions({
  locations,
  setIsDirectionsVisible
}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Directions</Text>
        <Text
          onPress={() => {
            setIsDirectionsVisible(false)
          }}
        >
          back to destinations
        </Text>
      </View>
      <FlatList
        data={locations}
        renderItem={({ item, index }) => (
          <DestinationListItem
            location={item}
            index={index}
          />
        )}
      />
    </View>
  )
}

function DestinationListItem({ location, index }: any) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemIndex}>{index + 1}</Text>
      <View style={styles.listItemTextContainer}>
        <Text
          style={styles.listItemTitle}
          numberOfLines={1}
        >
          {location.mainText}
        </Text>
        <Text style={styles.listItemBody} numberOfLines={1}>
          {location.secondaryText}
        </Text>
      </View>
    </View>
  )
}
