import { ReactElement } from 'react'
import { FlatList, ListRenderItem, Text } from 'react-native'

import { Contact, Separator } from './Contact'
import { ContactsSkeleton } from './ContactsSkeleton'
import { ContactInfo, useFetchContacts } from './useFetchContacts'

const renderContact: ListRenderItem<ContactInfo> = ({
  item: { name, email, avatar }
}): ReactElement => {
  return <Contact {...{ name, email, avatar }} />
}

export const Contacts = (): ReactElement => {
  const { loading, data } = useFetchContacts()

  if (!loading && !data) {
    return <Text>There are no contacts to display 🥹</Text>
  }

  if (loading) {
    return <ContactsSkeleton />
  }

  return <FlatList data={data} renderItem={renderContact} ItemSeparatorComponent={Separator} />
}
