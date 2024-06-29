"use client"
import { Menu } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

export default function AppSideMenu() {
  const pathname = usePathname()
  const [selectedKey, setSelectedKey] = useState([""])

  useEffect(() => {
    if (pathname.startsWith("/page-b")) {
      setSelectedKey(["2"])
    } else if (pathname === "/") {
      setSelectedKey(["1"])
    }
  }, [pathname])

  const menuItems = [
    { label: <Link href="/">Page A</Link>, key: 1 },
    { label: <Link href="/page-b">Page B</Link>, key: 2 },
    { type: "divider" },
  ]
  return (
    <Menu mode="inline" items={menuItems} selectedKeys={selectedKey}></Menu>
  )
}
