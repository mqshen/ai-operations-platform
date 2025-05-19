import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OperationSpaceList } from "@/components/operation-space-list"
import { Plus } from "lucide-react"

export default function OperationSpacesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">运营空间</h1>
        <div className="flex items-center gap-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            新增运营空间
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>运营空间列表</CardTitle>
          <CardDescription>管理您有权限的运营空间</CardDescription>
        </CardHeader>
        <CardContent>
          <OperationSpaceList />
        </CardContent>
      </Card>
    </div>
  )
}
