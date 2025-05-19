"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, ExternalLink, Edit } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const issues = [
  {
    id: "I12345",
    title: "智能体无法回答专业问题",
    type: "会话",
    source: "点踩",
    priority: "高",
    status: "待处理",
    assignee: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-15 10:30",
  },
  {
    id: "I12346",
    title: "知识库搜索不准确",
    type: "知识库",
    source: "人工反馈",
    priority: "中",
    status: "处理中",
    assignee: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-15 09:45",
  },
  {
    id: "I12347",
    title: "智能体响应缓慢",
    type: "会话",
    source: "人工反馈",
    priority: "高",
    status: "已解决",
    assignee: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-14 15:20",
  },
  {
    id: "I12348",
    title: "知识库内容过期",
    type: "知识库",
    source: "人工反馈",
    priority: "中",
    status: "待处理",
    assignee: {
      name: "赵六",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-14 14:10",
  },
  {
    id: "I12349",
    title: "智能体回复不相关",
    type: "会话",
    source: "点踩",
    priority: "高",
    status: "处理中",
    assignee: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-14 11:30",
  },
  {
    id: "I12350",
    title: "知识库内容更新",
    type: "知识库",
    source: "系统",
    priority: "低",
    status: "已解决",
    assignee: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    createdAt: "2023-05-13 16:45",
  },
]

export function IssueList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredIssues = issues.filter(
    (issue) =>
      issue.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.assignee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索问题..."
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
              <TableHead>问题ID</TableHead>
              <TableHead>标题</TableHead>
              <TableHead>类型</TableHead>
              <TableHead>来源</TableHead>
              <TableHead>优先级</TableHead>
              <TableHead>状态</TableHead>
              <TableHead>负责人</TableHead>
              <TableHead>创建时间</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredIssues.map((issue) => (
              <TableRow key={issue.id}>
                <TableCell className="font-medium">{issue.id}</TableCell>
                <TableCell>{issue.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{issue.type}</Badge>
                </TableCell>
                <TableCell>{issue.source}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      issue.priority === "高" ? "destructive" : issue.priority === "中" ? "default" : "secondary"
                    }
                  >
                    {issue.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      issue.status === "待处理" ? "destructive" : issue.status === "处理中" ? "default" : "success"
                    }
                  >
                    {issue.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={issue.assignee.avatar || "/placeholder.svg"} alt={issue.assignee.name} />
                      <AvatarFallback>{issue.assignee.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{issue.assignee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{issue.createdAt}</TableCell>
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
