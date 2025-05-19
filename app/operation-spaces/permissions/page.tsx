"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoleList } from "@/components/role-list"
import { UserList } from "@/components/user-list"

export default function OperationSpacePermissionsPage({
  params
}: {
  params: { id: string }
}) {
  return (
    <Tabs defaultValue="users" className="space-y-6">
      <TabsList>
        <TabsTrigger value="users">用户权限</TabsTrigger>
        <TabsTrigger value="roles">角色管理</TabsTrigger>
      </TabsList>

      <TabsContent value="users">
        <UserList />
      </TabsContent>

      <TabsContent value="roles">
        <RoleList />
      </TabsContent>
    </Tabs>
  )
}