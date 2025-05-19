"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, ThumbsUp, ThumbsDown } from "lucide-react"

// 模拟会话详情数据
const sessionDetails = {
  S12345: [
    {
      time: "2023-05-15 10:20:15",
      question: "你们的产品支持多语言吗？",
      answer: "是的，我们的产品支持多种语言，包括中文、英文、日文、韩文等。您可以在设置中切换语言。",
      channel: "网页",
      knowledgeAnswer: "产品支持中文、英文、日文、韩文、法文、德文、西班牙文等20种语言。",
      knowledgeReference: "产品手册 > 基本功能 > 语言支持",
      userFeedback: "点赞",
      feedbackContent: "回答很详细，谢谢！",
    },
    {
      time: "2023-05-15 10:22:30",
      question: "如何切换语言？",
      answer: "您可以在产品的设置菜单中找到语言设置选项，点击后选择您想要的语言，然后点击保存即可完成切换。",
      channel: "网页",
      knowledgeAnswer: "进入设置 > 通用 > 语言设置，选择需要的语言后点击保存。",
      knowledgeReference: "产品手册 > 设置 > 语言设置",
      userFeedback: "点赞",
      feedbackContent: "",
    },
    {
      time: "2023-05-15 10:25:45",
      question: "切换语言后需要重启吗？",
      answer: "不需要重启，语言切换会立即生效。如果您发现某些界面没有立即更新，可以刷新一下页面。",
      channel: "网页",
      knowledgeAnswer: "语言切换立即生效，无需重启应用。个别界面可能需要刷新。",
      knowledgeReference: "产品手册 > 设置 > 语言设置 > 常见问题",
      userFeedback: "无",
      feedbackContent: "",
    },
  ],
  S12346: [
    {
      time: "2023-05-15 09:40:10",
      question: "你们的产品价格是多少？",
      answer: "我们的产品有多种套餐，基础版每月99元，专业版每月299元，企业版需要联系销售定制。",
      channel: "移动端",
      knowledgeAnswer: "",
      knowledgeReference: "",
      userFeedback: "点踩",
      feedbackContent: "价格太贵了",
    },
    {
      time: "2023-05-15 09:42:25",
      question: "有没有免费试用？",
      answer: "是的，我们提供14天的免费试用，您可以在官网注册后即可开始试用所有功能。",
      channel: "移动端",
      knowledgeAnswer: "",
      knowledgeReference: "",
      userFeedback: "点踩",
      feedbackContent: "试用时间太短了",
    },
  ],
  S12347: [
    {
      time: "2023-05-15 09:10:05",
      question: "如何解决连接超时问题？",
      answer:
        "连接超时可能是由网络问题、服务器负载过高或客户端配置不当导致的。建议您先检查网络连接，然后尝试重启应用，如果问题仍然存在，可以尝试清除缓存或联系技术支持。",
      channel: "网页",
      knowledgeAnswer:
        "连接超时常见原因：1. 网络不稳定 2. 服务器负载高 3. 客户端配置问题。建议解决方案：检查网络、重启应用、清除缓存、联系技术支持。",
      knowledgeReference: "技术文档 > 故障排除 > 连接问题",
      userFeedback: "无",
      feedbackContent: "",
    },
    {
      time: "2023-05-15 09:15:20",
      question: "清除缓存在哪里操作？",
      answer: "您可以在应用的设置中找到系统选项，然后点击清除缓存按钮。清除缓存后，应用会重新启动。",
      channel: "网页",
      knowledgeAnswer: "设置 > 系统 > 存储管理 > 清除缓存。操作后应用将自动重启。",
      knowledgeReference: "技术文档 > 系统设置 > 缓存管理",
      userFeedback: "无",
      feedbackContent: "",
    },
  ],
}

interface SessionDetailProps {
  sessionId: string
}

export function SessionDetail({ sessionId }: SessionDetailProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const details = sessionDetails[sessionId] || []

  const filteredDetails = details.filter(
    (detail) =>
      detail.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      detail.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索对话内容..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          筛选
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>时间</TableHead>
              <TableHead>问题</TableHead>
              <TableHead>回答</TableHead>
              <TableHead>使用渠道</TableHead>
              <TableHead>知识库答案</TableHead>
              <TableHead>知识库引用</TableHead>
              <TableHead>用户评价</TableHead>
              <TableHead>反馈内容</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDetails.map((detail, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">{detail.time}</TableCell>
                <TableCell className="max-w-[200px] truncate">{detail.question}</TableCell>
                <TableCell className="max-w-[250px] truncate">{detail.answer}</TableCell>
                <TableCell>{detail.channel}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {detail.knowledgeAnswer ? detail.knowledgeAnswer : "无匹配答案"}
                </TableCell>
                <TableCell>
                  {detail.knowledgeReference ? <Badge variant="outline">{detail.knowledgeReference}</Badge> : "无引用"}
                </TableCell>
                <TableCell>
                  {detail.userFeedback === "点赞" ? (
                    <Badge className="flex items-center gap-1" variant="default">
                      <ThumbsUp className="h-3 w-3" /> 点赞
                    </Badge>
                  ) : detail.userFeedback === "点踩" ? (
                    <Badge className="flex items-center gap-1" variant="destructive">
                      <ThumbsDown className="h-3 w-3" /> 点踩
                    </Badge>
                  ) : (
                    <Badge variant="secondary">无评价</Badge>
                  )}
                </TableCell>
                <TableCell className="max-w-[150px] truncate">{detail.feedbackContent || "无反馈内容"}</TableCell>
              </TableRow>
            ))}
            {filteredDetails.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} className="h-24 text-center">
                  没有找到匹配的对话记录
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
