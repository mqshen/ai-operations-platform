"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink } from "lucide-react"

const agents = [
  {
    id: 1,
    name: "客服助手",
    space: "客服智能体",
    sessions: 5432,
    messages: 32456,
    likes: 2345,
    dislikes: 321,
    issues: 45,
    status: "活跃",
  },
  {
    id: 2,
    name: "产品咨询",
    space: "销售助手",
    sessions: 4321,
    messages: 25678,
    likes: 1987,
    dislikes: 234,
    issues: 32,
    status: "活跃",
  },
  {
    id: 3,
    name: "技术支持",
    space: "技术支持",
    sessions: 3456,
    messages: 19876,
    likes: 1654,
    dislikes: 187,
    issues: 28,
    status: "活跃",
  },
  {
    id: 4,
    name: "内部知识查询",
    space: "内部知识库",
    sessions: 2345,
    messages: 15432,
    likes: 1234,
    dislikes: 143,
    issues: 21,
    status: "活跃",
  },
  {
    id: 5,
    name: "新员工指导",
    space: "培训助手",
    sessions: 1234,
    messages: 8765,
    likes: 876,
    dislikes: 98,
    issues: 15,
    status: "非活跃",
  },
]

interface OperationSummaryTableProps {
  filter?: "active" | "inactive"
}

export function OperationSummaryTable({ filter }: OperationSummaryTableProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.space.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      !filter ||
      (filter === "active" && agent.status === "活跃") ||
      (filter === "inactive" && agent.status === "非活跃")

    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索智能体..."
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
              <TableHead>智能体名称</TableHead>
              <TableHead>所属空间</TableHead>
              <TableHead>会话数</TableHead>
              <TableHead>消息数</TableHead>
              <TableHead>点赞数</TableHead>
              <TableHead>点踩数</TableHead>
              <TableHead>问题数</TableHead>
              <TableHead>状态</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell className="font-medium">{agent.name}</TableCell>
                <TableCell>{agent.space}</TableCell>
                <TableCell>{agent.sessions}</TableCell>
                <TableCell>{agent.messages}</TableCell>
                <TableCell>{agent.likes}</TableCell>
                <TableCell>{agent.dislikes}</TableCell>
                <TableCell>{agent.issues}</TableCell>
                <TableCell>
                  <Badge variant={agent.status === "活跃" ? "default" : "secondary"}>{agent.status}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/operation-spaces/agents/${agent.id}`}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">查看详情</span>
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
