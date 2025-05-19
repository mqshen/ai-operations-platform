import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const tasks = [
  {
    id: 1,
    title: "处理用户反馈问题",
    type: "反馈",
    priority: "高",
    assignee: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 2,
    title: "审核知识库更新",
    type: "知识库",
    priority: "中",
    assignee: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    id: 3,
    title: "分析点踩会话",
    type: "会话",
    priority: "高",
    assignee: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  },
]

export function PendingTasks() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
              <AvatarFallback>{task.assignee.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{task.title}</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline">{task.type}</Badge>
                <Badge variant={task.priority === "高" ? "destructive" : "secondary"}>{task.priority}优先级</Badge>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
