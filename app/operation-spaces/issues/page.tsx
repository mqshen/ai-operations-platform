"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IssueList } from "@/components/issue-list"
import { IssueStats } from "@/components/issue-stats"
import { Download, Filter } from "lucide-react"

export default function IssuesPage() {
  // const searchParams = useSearchParams()
  const spaceId = "1"
  const spaceName = undefined
  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <h1 className="sr-only">问题清单</h1>
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

      <IssueStats />

      <Card>
        <CardHeader>
          <CardTitle>问题跟踪清单</CardTitle>
          <CardDescription>跟踪和处理问题</CardDescription>
        </CardHeader>
        <CardContent>
          <IssueList />
        </CardContent>
      </Card>
    </div>
  )
}
