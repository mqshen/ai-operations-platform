"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Search, ExternalLink } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Task = {
  id: number
  title: string
  type: string
  priority: string
  source: string
  assignee: {
    name: string
    avatar: string
  }
  createdAt: string
}

const tasks: Record<string, Task[]> = {
  pending: [
    {
      id: 1,
      title: "处理用户反馈问题",
      type: "反馈",
      priority: "高",
      source: "人工反馈",
      assignee: {
        name: "张三",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-15 10:30",
    },
    {
      id: 2,
      title: "审核知识库更新",
      type: "知识库",
      priority: "中",
      source: "系统",
      assignee: {
        name: "李四",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-15 09:45",
    },
    {
      id: 3,
      title: "分析点踩会话",
      type: "会话",
      priority: "高",
      source: "点踩",
      assignee: {
        name: "王五",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-15 08:20",
    },
    {
      id: 4,
      title: "智能体回复不准确",
      type: "会话",
      priority: "高",
      source: "点踩",
      assignee: {
        name: "张三",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-14 16:30",
    },
    {
      id: 5,
      title: "知识库内容过期",
      type: "知识库",
      priority: "中",
      source: "人工反馈",
      assignee: {
        name: "李四",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-14 14:15",
    },
  ],
  processing: [
    {
      id: 6,
      title: "智能体无法回答专业问题",
      type: "会话",
      priority: "中",
      source: "点踩",
      assignee: {
        name: "王五",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-14 11:30",
    },
    {
      id: 7,
      title: "知识库���索不准确",
      type: "知识库",
      priority: "高",
      source: "人工反馈",
      assignee: {
        name: "张三",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-14 10:20",
    },
  ],
  completed: [
    {
      id: 8,
      title: "智能体响应缓慢",
      type: "会话",
      priority: "高",
      source: "人工反馈",
      assignee: {
        name: "李四",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-13 15:45",
    },
    {
      id: 9,
      title: "知识库内容更新",
      type: "知识库",
      priority: "中",
      source: "系统",
      assignee: {
        name: "王五",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-13 14:30",
    },
    {
      id: 10,
      title: "智能体回复不相关",
      type: "会话",
      priority: "高",
      source: "点踩",
      assignee: {
        name: "张三",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      createdAt: "2023-05-13 11:20",
    },
  ],
}

interface WorkbenchTasksProps {
  status: "pending" | "processing" | "completed"
}

export function WorkbenchTasks({ status }: WorkbenchTasksProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTasks = tasks[status].filter(
    (task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.assignee.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索任务..."
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
              <TableHead>任务标题</TableHead>
              <TableHead>类型</TableHead>
              <TableHead>优先级</TableHead>
              <TableHead>来源</TableHead>
              <TableHead>负责人</TableHead>
              <TableHead>创建时间</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{task.type}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={task.priority === "高" ? "destructive" : task.priority === "中" ? "default" : "secondary"}
                  >
                    {task.priority}
                  </Badge>
                </TableCell>
                <TableCell>{task.source}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                      <AvatarFallback>{task.assignee.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span>{task.assignee.name}</span>
                  </div>
                </TableCell>
                <TableCell>{task.createdAt}</TableCell>
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
