"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Filter, Download, RefreshCw } from "lucide-react"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart } from "@/components/ui/chart"

interface AnalysisData {
  date: string
  sessionId: string
  sentiment: number
  turns: number
  score: number
  tags: string[]
  // 新增标签体系
  intentTags: string[] // 意图识别标签
  productTags: string[] // 产品与服务标签
  behaviorTags: string[] // 动态行为标签
  // 新增分析结果标识
  isGoodCase: boolean
  isBadCase: boolean
  // 新增监控状态
  needsFollowUp: boolean
  followUpReason?: string
}

export default function AnalysisPage() {
  const [dateRange, setDateRange] = useState({ start: new Date(), end: new Date() })
  const [data, setData] = useState<AnalysisData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [autoRefresh, setAutoRefresh] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      // TODO: 替换为实际API调用
      const mockData = Array.from({ length: 30 }, (_, i) => {
        const date = new Date(dateRange.start)
        date.setDate(date.getDate() + i)
        
        const sentiment = Math.random() * 2 - 1
        const score = Math.floor(Math.random() * 3) + 2
        const isGoodCase = score >= 4 && sentiment > 0.5
        const isBadCase = score <= 2 || sentiment < -0.5
        
        return {
          date: format(date, "yyyy-MM-dd"),
          sessionId: `S${Math.floor(Math.random() * 90000) + 10000}`,
          sentiment,
          turns: Math.floor(Math.random() * 20) + 5,
          score,
          tags: [
            ...(Math.random() > 0.7 ? ["重要"] : []),
            ...(Math.random() > 0.5 ? ["技术问题"] : []),
          ].filter(Boolean),
          intentTags: [
            ...(Math.random() > 0.6 ? ["产品咨询"] : []),
            ...(Math.random() > 0.6 ? ["技术支持"] : []),
          ].filter(Boolean),
          productTags: [
            ...(Math.random() > 0.7 ? ["企业版"] : []),
            ...(Math.random() > 0.5 ? ["SaaS"] : []),
          ].filter(Boolean),
          behaviorTags: [
            ...(Math.random() > 0.5 ? ["高频访问"] : []),
            ...(Math.random() > 0.3 ? ["潜在客户"] : []),
          ].filter(Boolean),
          isGoodCase,
          isBadCase,
          needsFollowUp: isBadCase || Math.random() > 0.8,
          followUpReason: isBadCase ? "需要跟进解决" :
                         Math.random() > 0.8 ? "高价值客户" : undefined
        }
      })
      setData(mockData)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    let interval: NodeJS.Timeout
    if (autoRefresh) {
      interval = setInterval(fetchData, 30000) // 30秒自动刷新
    }
    return () => clearInterval(interval)
  }, [dateRange, autoRefresh])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="sr-only">自动分析与监控</h1>
        <DateRangePicker
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
        />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={fetchData}
            disabled={isLoading}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? '加载中...' : '刷新数据'}
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            筛选
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            导出数据
          </Button>
          <Button
            variant={autoRefresh ? 'default' : 'outline'}
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
            自动刷新 {autoRefresh ? 'ON' : 'OFF'}
          </Button>
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            监控设置
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>会话分析</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              情绪分析: 显示会话的整体情绪倾向，范围从-1(负面)到1(正面)
            </p>
            <LineChart
              title="情绪分析"
              data={data.map(d => ({ date: d.date, value: d.sentiment }))}
              yDomain={[-1, 1]}
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              对话轮次: 显示每次会话的对话轮次数量
            </p>
            <BarChart
              title="对话轮次"
              data={data.map(d => ({ date: d.date, value: d.turns }))}
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              会话评分: 显示会话质量评分，范围从0(差)到5(优秀)
            </p>
            <LineChart
              title="会话评分"
              data={data.map(d => ({ date: d.date, value: d.score }))}
              yDomain={[0, 5]}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>会话标签提取</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-sm font-medium mb-2">基础标签</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from(new Set(data.flatMap(d => d.tags))).map(tag => (
                <Badge key={tag} variant="secondary" className="text-center">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">意图标签</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from(new Set(data.flatMap(d => d.intentTags))).map(tag => (
                <Badge key={tag} variant="outline" className="text-center">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">产品标签</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from(new Set(data.flatMap(d => d.productTags))).map(tag => (
                <Badge key={tag} variant="outline" className="text-center">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-2">行为标签</h3>
            <div className="grid grid-cols-3 gap-2">
              {Array.from(new Set(data.flatMap(d => d.behaviorTags))).map(tag => (
                <Badge key={tag} variant="outline" className="text-center">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>重点会话</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">优秀案例 (Good Cases)</h3>
              <div className="space-y-2">
                {data.filter(d => d.isGoodCase).map(session => (
                  <div key={session.sessionId} className="p-3 border rounded-lg bg-green-50">
                    <div className="flex justify-between">
                      <span className="font-medium">会话ID: {session.sessionId}</span>
                      <span>评分: {session.score}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      情绪值: {session.sentiment.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">待跟进案例 (Bad Cases)</h3>
              <div className="space-y-2">
                {data.filter(d => d.isBadCase).map(session => (
                  <div key={session.sessionId} className="p-3 border rounded-lg bg-red-50">
                    <div className="flex justify-between">
                      <span className="font-medium">会话ID: {session.sessionId}</span>
                      <span>评分: {session.score}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      情绪值: {session.sentiment.toFixed(2)}
                    </div>
                    {session.followUpReason && (
                      <div className="text-sm text-red-600">
                        跟进原因: {session.followUpReason}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}