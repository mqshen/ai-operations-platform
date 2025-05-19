import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { SessionInfo } from "@/components/session-info"

interface SessionDetailPageProps {
  params: {
    id: string
  }
}

export default function SessionDetailPage({ params }: SessionDetailPageProps) {
  const id  = "S12345"

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/operation-spaces/sessions">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">会话详情 {id}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            导出会话
          </Button>
        </div>
      </div>

      <SessionInfo sessionId={id} />

      <Card>
        <CardHeader>
          <CardTitle>对话历史</CardTitle>
          <CardDescription>查看完整对话内容和相关信息</CardDescription>
        </CardHeader>
        <CardContent>
          <SessionDetailContent sessionId={id} />
        </CardContent>
      </Card>
    </div>
  )
}

// 内联会话详情组件，避免导入问题
function SessionDetailContent({ sessionId }: { sessionId: string }) {
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

  const details = sessionDetails[sessionId] || []

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="p-2 text-left font-medium">时间</th>
              <th className="p-2 text-left font-medium">问题</th>
              <th className="p-2 text-left font-medium">回答</th>
              <th className="p-2 text-left font-medium">使用渠道</th>
              <th className="p-2 text-left font-medium">知识库答案</th>
              <th className="p-2 text-left font-medium">知识库引用</th>
              <th className="p-2 text-left font-medium">用户评价</th>
              <th className="p-2 text-left font-medium">反馈内容</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 whitespace-nowrap">{detail.time}</td>
                <td className="p-2 max-w-[200px] truncate">{detail.question}</td>
                <td className="p-2 max-w-[250px] truncate">{detail.answer}</td>
                <td className="p-2">{detail.channel}</td>
                <td className="p-2 max-w-[200px] truncate">
                  {detail.knowledgeAnswer ? detail.knowledgeAnswer : "无匹配答案"}
                </td>
                <td className="p-2">
                  {detail.knowledgeReference ? (
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {detail.knowledgeReference}
                    </span>
                  ) : (
                    "无引用"
                  )}
                </td>
                <td className="p-2">
                  {detail.userFeedback === "点赞" ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800">
                      点赞
                    </span>
                  ) : detail.userFeedback === "点踩" ? (
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
                      点踩
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800">
                      无评价
                    </span>
                  )}
                </td>
                <td className="p-2 max-w-[150px] truncate">{detail.feedbackContent || "无反馈内容"}</td>
              </tr>
            ))}
            {details.length === 0 && (
              <tr>
                <td colSpan={8} className="h-24 text-center">
                  没有找到对话记录
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
