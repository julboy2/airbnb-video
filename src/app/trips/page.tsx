import getCurrentUser from '@/actions/getCurrentUser'
import getReservations from '@/actions/getReservations'
import EmptyState from '@/components/EmptyState'
import TripsClient from './TripsClient'

export default async function TripsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    // 만약 에러나면 <ClientOnly> 감싸줄것
    return <EmptyState title="Unauthorized" subtitle="Please login" />
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  })

  if (reservations.length === 0) {
    // 만약 에러나면 <ClientOnly> 감싸줄것
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you havent reserved any trips."
      />
    )
  }
  // 만약 에러나면 <ClientOnly> 감싸줄것
  return <TripsClient reservations={reservations} currentUser={currentUser} />
}
