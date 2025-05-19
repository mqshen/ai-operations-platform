"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal, Search, Edit, Trash2, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const roles = [
  {
    id: 1,
    name: "平台超管",
    description: "可查看所有智能体运营数据",
    permissions: "全部权限",
    users: 2,
  },
  {
    id: 2,
    name: "应用空间管理员",
    description: "管理各智能体运营管理员",
    permissions: "空间管理、用户管理",
    users: 5,
  },
  {
    id: 3,
    name: "智能体运营管理员",
    description: "可查看所属智能体运营看板，管理所属智能体运营人员权限",
    permissions: "运营看板、问题处理、用户管理",
    users: 8,
  },
  {
    id: 4,
    name: "智能体运营人员",
    description: "可查看数据，跟踪处理问题",
    permissions: "运营看板、问题处理",
    users: 15,
  },
  {
    id: 5,
    name: "知识库管理员",
    description: "负责每个具体知识库维护、管理知识库运营人员权限",
    permissions: "知识库管理、用户管理",
    users: 6,
  },
  {
    id: 6,
    name: "知识库运营人员",
    description: "分析知识库整体的使用数据，并根据用户反馈优化迭代知识库，跟踪问题处理",
    permissions: "知识库查看、问题处理",
    users: 12,
  },
]

export function RoleList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索角色..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          添加角色
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>角色名称</TableHead>
              <TableHead>描述</TableHead>
              <TableHead>权限</TableHead>
              <TableHead>用户数</TableHead>
              <TableHead className="w-[80px]">操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium">{role.name}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>{role.permissions}</TableCell>
                <TableCell>{role.users}</TableCell>
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
                        <Edit className="mr-2 h-4 w-4" />
                        编辑
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        删除
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
