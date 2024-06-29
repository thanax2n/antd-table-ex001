"use client"
import MyTable1 from "@/components/MyTable1"
import { Col, Row } from "antd"

export default function Home() {
  return (
    <Row>
      <Col span={24}>
        <MyTable1 />
      </Col>
    </Row>
  )
}
