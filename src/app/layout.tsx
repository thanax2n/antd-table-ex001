"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { Layout } from "antd"
import AppHeader from "@/components/AppHeader"
import Sider from "antd/es/layout/Sider"
import AppSideMenu from "@/components/AppSideMenu"
import { Content } from "antd/es/layout/layout"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <Layout>
            <AppHeader
              isSidebarVisible={isSidebarVisible}
              toggleSidebar={toggleSidebar}
            />
            <Layout hasSider>
              {isSidebarVisible && (
                <Sider
                  theme="light"
                  style={{
                    position: "fixed",
                    top: "64px",
                    left: 0,
                    borderRight: "1px solid #f1f1f1",
                    height: "calc(100vh - 64px)",
                  }}
                >
                  <AppSideMenu />
                </Sider>
              )}
              <Layout style={{ marginLeft: isSidebarVisible ? "200px" : "0" }}>
                <Content
                  style={{ padding: "16px", minHeight: "calc(100vh - 64px)" }}
                >
                  {children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </AntdRegistry>
      </body>
    </html>
  )
}
