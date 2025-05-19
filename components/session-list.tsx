"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink } from "lucide-react"

const sessions = [
  {
    id: "S12345",
    user: "用户A",
    agent: "客服助手",
    space: "客服智能体",
    messages: 12,
    duration: "10分钟",
    time: "2023-05-15 10:30",
    feedback: "点赞",
    sentiment: "积极",
    knowledgeHit: true,
    knowledgeReference: true,
  },
  {
    id: "S12346",
    user: "用户B",
    agent: "产品咨询",
    space: "销售助手",
    messages: 8,
    duration: "5分钟",
    time: "2023-05-15 09:45",
    feedback: "点踩",
    sentiment: "消极",
    knowledgeHit: false,
    knowledgeReference: false,
  },
  {
    id: "S12347",
    user: "用户C",
    agent: "技术支持",
    space: "技术支持",
    messages: 15,
    duration: "12分钟",
    time: "2023-05-15 09:20",
    feedback: "无",
    sentiment: "中性",
    knowledgeHit: true,
    knowledgeReference: true,
  },
  {
    id: "S12348",
    user: "用户D",
    agent: "内部知识查询",
    space: "内部知识库",
    messages: 6,
    duration: "3分钟",
    time: "2023-05-15 08:50",
    feedback: "点赞",
    sentiment: "积极",
    knowledgeHit: true,
    knowledgeReference: true,
  },
  {
    id: "S12349",
    user: "用户E",
    agent: "客服助手",
    space: "客服智能体",
    messages: 10,
    duration: "8分钟",
    time: "2023-05-15 08:30",
    feedback: "点踩",
    sentiment: "消极",
    knowledgeHit: false,
    knowledgeReference: false,
  },
  {
    id: "S12350",
    user: "用户F",
    agent: "产品咨询",
    space: "销售助手",
    messages: 7,
    duration: "4分钟",
    time: "2023-05-15 08:15",
    feedback: "无",
    sentiment: "中性",
    knowledgeHit: true,
    knowledgeReference: false,
  },
]

export function SessionList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSessions = sessions.filter(
    (session) =>
      session.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.agent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.space.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索会话..."
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
              <TableHead>会话ID</TableHead>
              <TableHead>用户</TableHead>
              <TableHead>智能体</TableHead>
              <TableHead>所属空间</TableHead>
              <TableHead>消息数</TableHead>
              <TableHead>持续时间</TableHead>
              <TableHead>时间</TableHead>
              <TableHead>反馈</TableHead>
              <TableHead>情绪</TableHead>
              <TableHead>知识库命中</TableHead>
              <TableHead>知识库引用</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell className="font-medium">{session.id}</TableCell>
                <TableCell>{session.user}</TableCell>
                <TableCell>{session.agent}</TableCell>
                <TableCell>{session.space}</TableCell>
                <TableCell>{session.messages}</TableCell>
                <TableCell>{session.duration}</TableCell>
                <TableCell>{session.time}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      session.feedback === "点赞"
                        ? "default"
                        : session.feedback === "点踩"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {session.feedback}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      session.sentiment === "积极"
                        ? "default"
                        : session.sentiment === "消极"
                          ? "destructive"
                          : "secondary"
                    }
                  >
                    {session.sentiment}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={session.knowledgeHit ? "success" : "secondary"}>
                    {session.knowledgeHit ? "命中" : "未命中"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={session.knowledgeReference ? "success" : "secondary"}>
                    {session.knowledgeReference ? "有引用" : "无引用"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`/operation-spaces/sessions/${session.id}`}>
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
