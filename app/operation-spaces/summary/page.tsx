"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OperationSpaceSubnav } from "@/components/operation-space-subnav"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OperationSummaryStats } from "@/components/operation-summary-stats"
import { OperationSummaryTable } from "@/components/operation-summary-table"
import { Download, Filter } from "lucide-react"


export default function OperationSummaryPage() {
  // const searchParams = useSearchParams()
  const spaceId =  "1"
  const spaceName = undefined
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <h1 className="sr-only">运营汇总</h1>
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

      {/* <OperationSpaceSubnav
        spaceId={spaceId || "1"}
        spaceName={spaceName}
      /> */}
      <OperationSummaryStats />

      <Tabs defaultValue="all">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">全部</TabsTrigger>
          <TabsTrigger value="active">活跃</TabsTrigger>
          <TabsTrigger value="inactive">非活跃</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>智能体运营数据</CardTitle>
              <CardDescription>所有智能体的运营数据汇总</CardDescription>
            </CardHeader>
            <CardContent>
              <OperationSummaryTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>活跃智能体运营数据</CardTitle>
              <CardDescription>活跃智能体的运营数据汇总</CardDescription>
            </CardHeader>
            <CardContent>
              <OperationSummaryTable filter="active" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="inactive" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>非活跃智能体运营数据</CardTitle>
              <CardDescription>非活跃智能体的运营数据汇总</CardDescription>
            </CardHeader>
            <CardContent>
              <OperationSummaryTable filter="inactive" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
