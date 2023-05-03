import getCurrentUser from '@/actions/getCurrentUser'
import getFavoriteListings from '@/actions/getFavoriteListings'
import EmptyState from '@/components/EmptyState'
import FavoritesClient from './FavoritesClient'

export default async function Page() {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    // 에러나면 ClientOnly 감싸줄것
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks loke you have no favorite listings."
      />
    )
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />
}
