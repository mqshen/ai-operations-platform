"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Database,
  BookOpen,
  Settings,
  Menu,
  X,
  BarChart2,
  LayoutGrid,
  MessageSquare,
  AlertTriangle,
} from "lucide-react"

const navItems = [
  {
    title: "仪表盘",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "权限管理",
    href: "/permissions",
    icon: Users,
  },
  {
    title: "工作台",
    href: "/workbench",
    icon: Briefcase,
  },
  {
    title: "运营空间",
    href: "/operation-spaces",
    icon: Database,
    // subItems: [
    //   {
    //     title: "运营空间管理",
    //     href: "/operation-spaces",
    //     icon: LayoutGrid,
    //   },
    //   {
    //     title: "运营汇总",
    //     href: "/operation-spaces/summary",
    //     icon: BarChart2,
    //   },
    //   {
    //     title: "会话清单",
    //     href: "/operation-spaces/sessions",
    //     icon: MessageSquare,
    //   },
    //   {
    //     title: "问题清单",
    //     href: "/operation-spaces/issues",
    //     icon: AlertTriangle,
    //   },
    // ],
  },
  {
    title: "知识库",
    href: "/knowledge-base",
    icon: BookOpen,
  },
  {
    title: "设置",
    href: "/settings",
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  const toggleSubMenu = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "关闭菜单" : "打开菜单"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden", isOpen ? "block" : "hidden")}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-background border-r transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <h2 className="text-lg font-semibold">AI 运营平台</h2>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => (
              <div key={item.href} className="space-y-1">
                {item.subItems ? (
                  <>
                    <Button
                      variant="ghost"
                      className={cn("w-full justify-start", pathname.startsWith(item.href) && "bg-muted")}
                      onClick={() => toggleSubMenu(item.title)}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.title}
                    </Button>
                    {expandedItems[item.title] && (
                      <div className="ml-6 space-y-1">
                        {item.subItems.map((subItem) => (
                          <Link key={subItem.href} href={subItem.href} onClick={() => setIsOpen(false)}>
                            <Button
                              variant="ghost"
                              className={cn("w-full justify-start", pathname === subItem.href && "bg-muted")}
                            >
                              <subItem.icon className="mr-2 h-4 w-4" />
                              {subItem.title}
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className={cn("w-full justify-start", pathname === item.href && "bg-muted")}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.title}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
