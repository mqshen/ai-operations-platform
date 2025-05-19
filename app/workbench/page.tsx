import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WorkbenchTasks } from "@/components/workbench-tasks"
import { Filter } from "lucide-react"

export default function WorkbenchPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">工作台</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            筛选
          </Button>
          <Button>刷新数据</Button>
        </div>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="pending">待处理</TabsTrigger>
          <TabsTrigger value="processing">处理中</TabsTrigger>
          <TabsTrigger value="completed">已完成</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>待处理任务</CardTitle>
              <CardDescription>需要您处理的任务列表</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkbenchTasks status="pending" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="processing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>处理中任务</CardTitle>
              <CardDescription>正在处理的任务列表</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkbenchTasks status="processing" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>已完成任务</CardTitle>
              <CardDescription>已完成的任务列表</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkbenchTasks status="completed" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
