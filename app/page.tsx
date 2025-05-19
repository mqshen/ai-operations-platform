import { DashboardStats } from "@/components/dashboard-stats"
import { RecentActivity } from "@/components/recent-activity"
import { PendingTasks } from "@/components/pending-tasks"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">AI 运营平台</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">导出报表</Button>
          <Button>刷新数据</Button>
        </div>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>工作台</CardTitle>
            <CardDescription>您的待办任务和最近活动</CardDescription>
          </CardHeader>
          <CardContent>
            <PendingTasks />
            <div className="mt-4">
              <Link href="/workbench">
                <Button variant="outline" className="w-full">
                  查看全部
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
            <CardDescription>平台最近的操作和更新</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>运营空间</CardTitle>
            <CardDescription>管理您的运营空间</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>已接入空间: 12</p>
            <p>活跃智能体: 8</p>
            <Link href="/operation-spaces">
              <Button variant="outline" className="w-full">
                查看详情
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>问题跟踪</CardTitle>
            <CardDescription>跟踪和解决问题</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>待处理问题: 24</p>
            <p>问题解决率: 87%</p>
            <Link href="/issues">
              <Button variant="outline" className="w-full">
                查看详情
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>知识库</CardTitle>
            <CardDescription>管理知识库内容</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>知识库总数: 15</p>
            <p>本月新增文档: 42</p>
            <Link href="/knowledge-base">
              <Button variant="outline" className="w-full">
                查看详情
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
