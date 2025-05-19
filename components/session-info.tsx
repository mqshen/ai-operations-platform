import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, User, Bot, Database, ThumbsUp, ThumbsDown } from "lucide-react"

// 模拟会话数据
const sessionData = {
  S12345: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
  S12346: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
  S12347: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
  S12348: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
  S12349: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
  S12350: {
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
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  },
}

interface SessionInfoProps {
  sessionId: string
}

export function SessionInfo({ sessionId }: SessionInfoProps) {
  const session = sessionData[sessionId] || {
    id: sessionId,
    user: "未知用户",
    agent: "未知智能体",
    space: "未知空间",
    messages: 0,
    duration: "未知",
    time: "未知",
    feedback: "无",
    sentiment: "未知",
    knowledgeHit: false,
    knowledgeReference: false,
    userAvatar: "/placeholder.svg?height=40&width=40",
    agentAvatar: "/placeholder.svg?height=40&width=40",
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">用户信息</CardTitle>
          <User className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session.userAvatar || "/placeholder.svg"} alt={session.user} />
              <AvatarFallback>{session.user.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{session.user}</div>
              <div className="text-sm text-muted-foreground">ID: {session.id}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">智能体信息</CardTitle>
          <Bot className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session.agentAvatar || "/placeholder.svg"} alt={session.agent} />
              <AvatarFallback>{session.agent.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{session.agent}</div>
              <div className="text-sm text-muted-foreground">{session.space}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">会话信息</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">消息数:</span>
            <span>{session.messages}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">持续时间:</span>
            <span>{session.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">时间:</span>
            <span>{session.time}</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">反馈信息</CardTitle>
          {session.feedback === "点赞" ? (
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          ) : session.feedback === "点踩" ? (
            <ThumbsDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Database className="h-4 w-4 text-muted-foreground" />
          )}
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">用户反馈:</span>
            <Badge
              variant={
                session.feedback === "点赞" ? "default" : session.feedback === "点踩" ? "destructive" : "secondary"
              }
            >
              {session.feedback}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">情绪分析:</span>
            <Badge
              variant={
                session.sentiment === "积极" ? "default" : session.sentiment === "消极" ? "destructive" : "secondary"
              }
            >
              {session.sentiment}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">知识库命中:</span>
            <Badge variant={session.knowledgeHit ? "success" : "secondary"}>
              {session.knowledgeHit ? "命中" : "未命中"}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">知识库引用:</span>
            <Badge variant={session.knowledgeReference ? "success" : "secondary"}>
              {session.knowledgeReference ? "有引用" : "无引用"}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
