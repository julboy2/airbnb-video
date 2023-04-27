import getListingById from '@/actions/getListingById'
import EmptyState from '@/components/EmptyState'
import ListingClient from './ListingClient'
import getCurrentUser from '@/actions/getCurrentUser'

type ListingPageProps = {
  listingId?: string
}

export default async function ListingPage({
  params,
}: {
  params: ListingPageProps
}) {
  const listing = await getListingById(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    // 만약 에러나면 <ClientOnly> 감싸줄것
    return <EmptyState />
  }

  // 만약 에러나면 <ClientOnly> 감싸줄것
  return <ListingClient listing={listing} currentUser={currentUser} />
}
