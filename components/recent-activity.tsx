import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "张三",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "处理了问题",
    target: "用户无法访问知识库",
    time: "10分钟前",
  },
  {
    id: 2,
    user: {
      name: "李四",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "更新了知识库",
    target: "产品使用手册",
    time: "1小时前",
  },
  {
    id: 3,
    user: {
      name: "王五",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "添加了新智能体",
    target: "客服助手",
    time: "2小时前",
  },
  {
    id: 4,
    user: {
      name: "赵六",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    action: "修改了权限",
    target: "运营团队",
    time: "昨天",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <p>
              <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
              <span className="font-medium">{activity.target}</span>
            </p>
            <p className="text-sm text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
