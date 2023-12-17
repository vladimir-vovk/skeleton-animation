import { Image } from 'expo-image'
import { Skeleton } from 'moti/skeleton'
import { ReactElement } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AVATAR_SIZE = 90

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  infoContainer: {
    alignItems: 'flex-start',
    paddingVertical: 11,
    paddingLeft: 24
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 2
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginVertical: 7,
    marginLeft: 14
  },
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgrey'
  },
  nameSkeleton: {
    marginBottom: 9
  }
})

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

type Props = {
  name: string
  email: string
  avatar: string
}

export const Contact = ({ name, email, avatar }: Props): ReactElement => {
  return (
    <View style={styles.row}>
      <Image
        style={styles.avatar}
        source={avatar}
        contentFit="cover"
        transition={500}
        placeholder={blurhash}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}

export const Separator = () => <View style={styles.separator} />

export const ContactSkeleton = () => (
  <Skeleton.Group show>
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Skeleton
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          radius={AVATAR_SIZE / 2}
          colorMode="light"
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameSkeleton}>
          <Skeleton width={140} height={20} colorMode="light" />
        </View>
        <Skeleton width={160} height={16} colorMode="light" />
      </View>
    </View>
  </Skeleton.Group>
)
