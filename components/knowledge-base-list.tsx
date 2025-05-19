"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Edit, Trash2, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const knowledgeBases = [
  {
    id: 1,
    name: "产品手册",
    description: "产品使用说明和常见问题",
    documents: 156,
    references: 12543,
    lastUpdated: "2023-05-15",
    status: "活跃",
  },
  {
    id: 2,
    name: "技术文档",
    description: "技术规范和开发指南",
    documents: 243,
    references: 8765,
    lastUpdated: "2023-05-14",
    status: "活跃",
  },
  {
    id: 3,
    name: "公司政策",
    description: "公司规章制度和流程",
    documents: 87,
    references: 4321,
    lastUpdated: "2023-05-10",
    status: "活跃",
  },
  {
    id: 4,
    name: "培训资料",
    description: "员工培训和学习资源",
    documents: 124,
    references: 6543,
    lastUpdated: "2023-05-08",
    status: "活跃",
  },
  {
    id: 5,
    name: "市场资料",
    description: "市场分析和竞品信息",
    documents: 76,
    references: 3456,
    lastUpdated: "2023-05-05",
    status: "非活跃",
  },
]

export function KnowledgeBaseList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredKnowledgeBases = knowledgeBases.filter(
    (kb) =>
      kb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kb.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索知识库..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>知识库名称</TableHead>
              <TableHead>描述</TableHead>
              <TableHead>文档数</TableHead>
              <TableHead>引用次数</TableHead>
              <TableHead>最后更新</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredKnowledgeBases.map((kb) => (
              <TableRow key={kb.id}>
                <TableCell className="font-medium">{kb.name}</TableCell>
                <TableCell>{kb.description}</TableCell>
                <TableCell>{kb.documents}</TableCell>
                <TableCell>{kb.references}</TableCell>
                <TableCell>{kb.lastUpdated}</TableCell>
                <TableCell>
                  <Badge variant={kb.status === "活跃" ? "default" : "secondary"}>{kb.status}</Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">打开菜单</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        查看详情
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        编辑
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        删除
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
