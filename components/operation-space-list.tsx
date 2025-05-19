"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal, Search, Edit, Trash2, ExternalLink, LayoutGrid, List } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const spaces = [
  {
    id: 1,
    name: "客服智能体",
    description: "处理客户咨询和问题",
    agents: 5,
    sessions: 12543,
    knowledgeBases: 3,
    status: "活跃",
    upvotes: 892,
    downvotes: 56,
    issues: 23,
  },
  {
    id: 2,
    name: "销售助手",
    description: "辅助销售人员提供产品信息",
    agents: 3,
    sessions: 8765,
    knowledgeBases: 2,
    status: "活跃",
    upvotes: 765,
    downvotes: 32,
    issues: 15,
  },
  {
    id: 3,
    name: "内部知识库",
    description: "公司内部知识管理",
    agents: 2,
    sessions: 5432,
    knowledgeBases: 5,
    status: "活跃",
    upvotes: 432,
    downvotes: 12,
    issues: 8,
  },
  {
    id: 4,
    name: "技术支持",
    description: "提供技术问题解答",
    agents: 4,
    sessions: 9876,
    knowledgeBases: 4,
    status: "活跃",
    upvotes: 654,
    downvotes: 45,
    issues: 19,
  },
  {
    id: 5,
    name: "培训助手",
    description: "新员工培训和指导",
    agents: 2,
    sessions: 3456,
    knowledgeBases: 3,
    status: "非活跃",
    upvotes: 123,
    downvotes: 8,
    issues: 5,
  },
]

export function OperationSpaceList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")

  const filteredSpaces = spaces.filter(
    (space) =>
      space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      space.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索运营空间..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === "list" ? "default" : "outline"} 
            size="icon"
            onClick={() => setViewMode("list")}
            title="列表视图"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === "grid" ? "default" : "outline"} 
            size="icon"
            onClick={() => setViewMode("grid")}
            title="卡片视图"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "list" ? (
        <div className="rounded-md border">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead>空间名称</TableHead>
              <TableHead>描述</TableHead>
              <TableHead>智能体数</TableHead>
              <TableHead>会话数</TableHead>
              <TableHead>知识库数</TableHead>
              <TableHead>点赞数</TableHead>
              <TableHead>点踩数</TableHead>
              <TableHead>问题数</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="w-[120px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSpaces.map((space) => (
              <TableRow key={space.id}>
                <TableCell className="font-medium">{space.name}</TableCell>
                <TableCell>{space.description}</TableCell>
                <TableCell>{space.agents}</TableCell>
                <TableCell>{space.sessions}</TableCell>
                <TableCell>{space.knowledgeBases}</TableCell>
                <TableCell className="text-green-500">{space.upvotes}</TableCell>
                <TableCell className="text-red-500">{space.downvotes}</TableCell>
                <TableCell>{space.issues}</TableCell>
                <TableCell>
                  <Badge variant={space.status === "活跃" ? "default" : "secondary"}>{space.status}</Badge>
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={{
                      pathname: `/operation-spaces/summary`,
                      query: {
                        spaceId: space.id,
                        spaceName: space.name
                      }
                    }}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">查看详情</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" title="编辑">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">编辑</span>
                  </Button>
                  <Button variant="ghost" size="icon" title="删除" className="text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">删除</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSpaces.map((space) => (
            <Card key={space.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{space.name}</CardTitle>
                    <CardDescription className="mt-1">{space.description}</CardDescription>
                  </div>
                  <Badge variant={space.status === "活跃" ? "default" : "secondary"}>
                    {space.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">智能体</p>
                    <p className="font-medium">{space.agents}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">会话数</p>
                    <p className="font-medium">{space.sessions}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">点赞</p>
                    <p className="font-medium text-green-500">{space.upvotes}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">点踩</p>
                    <p className="font-medium text-red-500">{space.downvotes}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={{
                      pathname: `/operation-spaces/summary`,
                      query: {
                        spaceId: space.id,
                        spaceName: space.name
                      }
                    }}>
                      查看详情
                    </Link>
                  </Button>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" title="编辑">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="删除" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
