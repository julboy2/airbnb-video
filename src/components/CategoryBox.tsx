import { useRouter, useSearchParams } from 'next/navigation'
import { IconType } from 'react-icons'
import qs from 'query-string'
import { useCallback } from 'react'

type Props = {
  icon: IconType
  label: string
  selected?: boolean
}

export default function CategoryBox({ icon: Icon, label, selected }: Props) {
  const router = useRouter()
  const params = useSearchParams()

  const handleClick = useCallback(() => {
    let currentQuery = {}

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    }
  }, [])

  return (
    <div
      className={`flex flex-col items-center justify-between gap-2 p-3 border-b-2 
      hover:text-neutral-800
        transition cursor-pointer
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
    `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  )
}