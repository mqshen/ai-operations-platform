"use client"

import { useSearchParams } from "next/navigation"
import { OperationSpaceSubnav } from "@/components/operation-space-subnav"

export default function OperationSpaceLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { id: string, spaceName?: string }
}) {
  // const searchParams = useSearchParams()
  const querySpaceId = "1"//searchParams.get("spaceId")
  const querySpaceName = ""//searchParams.get("spaceName")

  const spaceId = querySpaceId || params.id
  const spaceName = querySpaceName || params.spaceName

  return (
    <div className="space-y-6">
      <OperationSpaceSubnav spaceId={spaceId} spaceName={spaceName} />
      {children}
    </div>
  )
}