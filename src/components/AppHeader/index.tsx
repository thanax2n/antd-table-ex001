import { Header } from "antd/es/layout/layout"
import {
  AntDesignOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"
import { Avatar, Button } from "antd"

export default function AppHeader({ isSidebarVisible, toggleSidebar }) {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <Button
          type="text"
          onClick={toggleSidebar}
          icon={
            isSidebarVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
          }
          size="large"
        />
        <div>My App</div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar size={36} src="/profile.png" />
        <div>John Doe</div>
      </div>
    </Header>
  )
}
