import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { KnowledgeBaseList } from "@/components/knowledge-base-list"
import { KnowledgeBaseStats } from "@/components/knowledge-base-stats"
import { Plus, Download, Filter } from "lucide-react"

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">知识库</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            筛选
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            导出数据
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            添加知识库
          </Button>
        </div>
      </div>

      <KnowledgeBaseStats />

      <Card>
        <CardHeader>
          <CardTitle>知识库列表</CardTitle>
          <CardDescription>管理和查看所有知识库</CardDescription>
        </CardHeader>
        <CardContent>
          <KnowledgeBaseList />
        </CardContent>
      </Card>
    </div>
  )
}
