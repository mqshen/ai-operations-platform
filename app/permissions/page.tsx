import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserList } from "@/components/user-list"
import { RoleList } from "@/components/role-list"
import { Plus } from "lucide-react"

export default function PermissionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">权限管理</h1>
        <div className="flex items-center gap-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            添加用户
          </Button>
        </div>
      </div>

      <Tabs defaultValue="users">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="users">用户管理</TabsTrigger>
          <TabsTrigger value="roles">角色权限</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>用户列表</CardTitle>
              <CardDescription>管理平台用户及其权限</CardDescription>
            </CardHeader>
            <CardContent>
              <UserList />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>角色权限配置</CardTitle>
              <CardDescription>管理平台角色及其权限</CardDescription>
            </CardHeader>
            <CardContent>
              <RoleList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
