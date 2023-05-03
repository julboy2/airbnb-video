import getCurrentUser from '@/actions/getCurrentUser'
import getReservations from '@/actions/getReservations'
import EmptyState from '@/components/EmptyState'
import ReservationsClient from './ReservationsClient'

export default async function ReservationsPage() {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    // 에러나면  ClientOnly 로 감싸줄것
    return <EmptyState title="Unauthorized" subtitle="Please login" />
  }

  const reservations = await getReservations({ authorId: currentUser.id })

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Lookd like you have no reservations on your properties "
      />
    )
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  )
}
