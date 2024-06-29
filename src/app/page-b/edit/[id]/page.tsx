"use client"

import { Space, Table, Checkbox, Select, Input, Row, Col, Image } from "antd"
import React, { useState } from "react"

const { Option } = Select

export default function EditPageB() {
  const [selectedRows, setSelectedRows] = useState([])

  const handleCheckboxChange = (record, e) => {
    const newSelectedRows = e.target.checked
      ? [...selectedRows, record]
      : selectedRows.filter((row) => row.id !== record.id)
    setSelectedRows(newSelectedRows)
  }

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: (text, record) => (
        <Checkbox
          checked={selectedRows.some((row) => row.id === record.id)}
          onChange={(e) => handleCheckboxChange(record, e)}
        />
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      render: (text, record) => (
        <Select defaultValue={text} style={{ width: 120 }}>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="C">C</Option>
        </Select>
      ),
    },
    {
      title: "Comment",
      dataIndex: "comment",
      key: "comment",
      render: (text) => <Input defaultValue={text} />,
    },
  ]

  const data = [
    {
      id: 1,
      date: "2022-03-13",
      grade: "A",
      comment: "Amaritudo amita deripio cumque trucido.",
      photo1: "https://picsum.photos/seed/7Aebv4ER4f/1080/1080",
      photo2: "https://picsum.photos/seed/UD7eBpMd/1080/1080",
      photo3: "https://picsum.photos/seed/FIsVwv8/1080/1080",
    },
    {
      id: 2,
      date: "2022-03-26",
      grade: "C",
      comment: "Apostolus ancilla acies.",
      photo1: "https://picsum.photos/seed/s9GYrjk/1080/1080",
      photo2: "https://picsum.photos/seed/YNkqaXOD0/1080/1080",
      photo3: "https://picsum.photos/seed/n1ODR5M5/1080/1080",
    },
    {
      id: 3,
      date: "2021-06-07",
      grade: "C",
      comment:
        "Decipio absens distinctio vulgus solitudo celer degero caelestis ciminatio eum.",
      photo1: "https://picsum.photos/seed/jnRwpfue/1080/1080",
      photo2: "https://picsum.photos/seed/S6c2Er0/1080/1080",
      photo3: "https://picsum.photos/seed/fhBPBcs/1080/1080",
    },
    {
      id: 4,
      date: "2023-06-09",
      grade: "A",
      comment: "Utique clarus acer vulgivagus auctor.",
      photo1: "https://picsum.photos/seed/rCcCL1QX/1080/1080",
      photo2: "https://picsum.photos/seed/qlN8UTfN8/1080/1080",
      photo3: "https://picsum.photos/seed/VV4D5Rn/1080/1080",
    },
    {
      id: 5,
      date: "2022-10-04",
      grade: "B",
      comment: "Accusantium pecto repellat coniecto trado dolorem aqua.",
      photo1: "https://picsum.photos/seed/DqCa04fJV/1080/1080",
      photo2: "https://picsum.photos/seed/KjxLd8md/1080/1080",
      photo3: "https://picsum.photos/seed/uzoVlyjy/1080/1080",
    },
  ]

  return (
    <Space size={20} direction="vertical" style={{ width: "100%" }}>
      <Table
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        pagination={false}
      />
      <div>
        {selectedRows.map((row) => (
          <div key={row.id}>
            <h3>Date: {row.date}</h3>
            <Row gutter={16}>
              <Col span={8}>
                <Image
                  src={row.photo1}
                  alt={`Photo 1 of ${row.id}`}
                  style={{ width: "40%" }}
                />
              </Col>
              <Col span={8}>
                <Image
                  src={row.photo2}
                  alt={`Photo 2 of ${row.id}`}
                  style={{ width: "40%" }}
                />
              </Col>
              <Col span={8}>
                <Image
                  src={row.photo3}
                  alt={`Photo 3 of ${row.id}`}
                  style={{ width: "40%" }}
                />
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </Space>
  )
}
