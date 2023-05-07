'use client'

import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ListingCard from '@/components/listings/ListingCard'
import { SafeListing, SafeUser } from '@/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'

type Props = {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}

export default function PropertiesClient({ listings, currentUser }: Props) {
  const router = useRouter()
  const [deletingId, setDeletingId] = useState('')

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id)

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Listing deleted')
          router.refresh()
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error)
        })
        .finally(() => {
          setDeletingId('')
        })
    },
    [router]
  )
  return (
    <Container>
      <Heading title="Properties" subtitle="List of your properties" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onCancel}
            disabled={deletingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}