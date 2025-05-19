// components/operation-space-subnav.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MessageSquare, AlertTriangle, BarChart2, BookOpen, Activity, Shield } from "lucide-react"

export function OperationSpaceSubnav({ spaceId, spaceName }: { spaceId: string; spaceName?: string }) {
  const pathname = usePathname()

  const navItems = [
    {
      name: "运营汇总",
      href: `/operation-spaces/summary?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: BarChart2,
    },
    {
      name: "会话清单",
      href: `/operation-spaces/sessions?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: MessageSquare,
    },
    {
      name: "问题清单",
      href: `/operation-spaces/issues?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: AlertTriangle,
    },
    {
      name: "知识库",
      href: `/operation-spaces/knowledge-base?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: BookOpen,
    },
    {
      name: "自动分析与监控",
      href: `/operation-spaces/analysis?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: Activity,
    },
    {
      name: "权限管理",
      href: `/operation-spaces/permissions?spaceId=${spaceId}&spaceName=${encodeURIComponent(spaceName || '')}`,
      icon: Shield,
    }
  ]

  return (
    <div className="space-y-4 px-4">
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold">
            {spaceName || "运营空间"}
          </h2>
          <div className="rounded-md bg-muted px-3 py-1 text-sm font-medium">
            {spaceId}
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          最后更新: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <div className="flex items-center gap-2 border-b pb-4">
        {navItems.map((item) => (
          <Button 
            key={item.href}
            variant={pathname.split('?')[0] === item.href.split('?')[0] ? "default" : "ghost"}
            asChild
          >
            <Link href={item.href} className="flex items-center gap-2">
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  )
}