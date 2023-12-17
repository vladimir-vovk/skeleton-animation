import { ReactElement } from 'react'
import { FlatList } from 'react-native'

import { ContactSkeleton, Separator } from './Contact'

const dummyContacts = Array(4).fill(null)

export const ContactsSkeleton = (): ReactElement => {
  return (
    <FlatList
      data={dummyContacts}
      renderItem={ContactSkeleton}
      ItemSeparatorComponent={Separator}
    />
  )
}
