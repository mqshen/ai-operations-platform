"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SessionList } from "@/components/session-list"
import { Download, Filter } from "lucide-react"

export default function SessionsPage() {
  // const searchParams = useSearchParams()
  const spaceId = "1"//searchParams.get("spaceId") || "1"
  const spaceName = ""//searchParams.get("spaceName") || undefined
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <h1 className="sr-only">会话清单</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            筛选
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            导出数据
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>会话列表</CardTitle>
          <CardDescription>查看和分析用户会话</CardDescription>
        </CardHeader>
        <CardContent>
          <SessionList />
        </CardContent>
      </Card>
    </div>
  )
}
