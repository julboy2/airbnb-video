import getCurrentUser from '@/actions/getCurrentUser'
import EmptyState from '@/components/EmptyState'
import PropertiesClient from './PropertiesClient'
import getListings from '@/actions/getListings'

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    // 만약 에러나면 <ClientOnly> 감싸줄것
    return <EmptyState title="Unauthorized" subtitle="Please login" />
  }

  const listings = await getListings({
    userId: currentUser.id,
  })

  if (listings.length === 0) {
    // 만약 에러나면 <ClientOnly> 감싸줄것
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties."
      />
    )
  }
  // 만약 에러나면 <ClientOnly> 감싸줄것
  return <PropertiesClient listings={listings} currentUser={currentUser} />
}
