import { Space, Table } from "antd"
import React from "react"
import { useRouter } from "next/navigation"

export default function MyTable1() {
  const router = useRouter()

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Photo 1",
      dataIndex: "photo1",
      key: "photo1",
      render: (text: string) => (
        <img
          src={text}
          alt="photo1"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Photo 2",
      dataIndex: "photo2",
      key: "photo2",
      render: (text: string) => (
        <img
          src={text}
          alt="photo2"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Photo 3",
      dataIndex: "photo3",
      key: "photo3",
      render: (text: string) => (
        <img
          src={text}
          alt="photo3"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
  ]

  const data = [
    {
      id: 1,
      date: "2022-03-14",
      firstName: "Karianne",
      lastName: "Kautzer",
      email: "Laurine_MacGyver12@hotmail.com",
      salary: "29899",
      photo1: "https://picsum.photos/seed/VSBloA/1080/1080",
      photo2: "https://picsum.photos/seed/LD1cBE7/1080/1080",
      photo3: "https://picsum.photos/seed/6EqoW/1080/1080",
    },
    {
      id: 2,
      date: "2020-06-02",
      firstName: "Genoveva",
      lastName: "Schimmel",
      email: "Reyna.Cummings96@yahoo.com",
      salary: "11990",
      photo1: "https://picsum.photos/seed/pBCXG8Rsa/1080/1080",
      photo2: "https://picsum.photos/seed/bkKpy0SI/1080/1080",
      photo3: "https://picsum.photos/seed/pHG9Yr/1080/1080",
    },
    {
      id: 3,
      date: "2022-09-05",
      firstName: "Antonietta",
      lastName: "Collins",
      email: "Daren70@gmail.com",
      salary: "10573",
      photo1: "https://picsum.photos/seed/1T2cOuvss/1080/1080",
      photo2: "https://picsum.photos/seed/Rv66T/1080/1080",
      photo3: "https://picsum.photos/seed/VKxpMUxL/1080/1080",
    },
    {
      id: 4,
      date: "2022-09-19",
      firstName: "Sigurd",
      lastName: "Wilkinson",
      email: "Aletha_Shanahan60@hotmail.com",
      salary: "18670",
      photo1: "https://picsum.photos/seed/zojUAYQ/1080/1080",
      photo2: "https://picsum.photos/seed/Fnr4md/1080/1080",
      photo3: "https://picsum.photos/seed/JrnVkkle/1080/1080",
    },
    {
      id: 5,
      date: "2020-02-15",
      firstName: "Elias",
      lastName: "Gottlieb",
      email: "Bonita.Lind@hotmail.com",
      salary: "26096",
      photo1: "https://picsum.photos/seed/TpaY9uKiFy/1080/1080",
      photo2: "https://picsum.photos/seed/QTYh4/1080/1080",
      photo3: "https://picsum.photos/seed/XIyQX/1080/1080",
    },
    {
      id: 6,
      date: "2022-06-30",
      firstName: "Albin",
      lastName: "Monahan",
      email: "Everett.Hilll@hotmail.com",
      salary: "12894",
      photo1: "https://picsum.photos/seed/FArHJ/1080/1080",
      photo2: "https://picsum.photos/seed/ORtDYd5M/1080/1080",
      photo3: "https://picsum.photos/seed/0ZAo2f8CAi/1080/1080",
    },
    {
      id: 7,
      date: "2023-09-29",
      firstName: "Charlotte",
      lastName: "Stracke",
      email: "Carole.Ferry@hotmail.com",
      salary: "19236",
      photo1: "https://picsum.photos/seed/d9dvhe/1080/1080",
      photo2: "https://picsum.photos/seed/4DUEU9R8WI/1080/1080",
      photo3: "https://picsum.photos/seed/QwEomN8/1080/1080",
    },
    {
      id: 8,
      date: "2020-11-29",
      firstName: "Delia",
      lastName: "Farrell",
      email: "Henri_Collier57@gmail.com",
      salary: "27875",
      photo1: "https://picsum.photos/seed/A48rRvv8b/1080/1080",
      photo2: "https://picsum.photos/seed/TIIDVl2HZ/1080/1080",
      photo3: "https://picsum.photos/seed/I4asVyd/1080/1080",
    },
    {
      id: 9,
      date: "2022-08-20",
      firstName: "Fermin",
      lastName: "Little",
      email: "Natalia.Gislason@yahoo.com",
      salary: "28444",
      photo1: "https://picsum.photos/seed/4ZxguUzH/1080/1080",
      photo2: "https://picsum.photos/seed/aE421L/1080/1080",
      photo3: "https://picsum.photos/seed/G0Mei/1080/1080",
    },
    {
      id: 10,
      date: "2022-10-15",
      firstName: "Neha",
      lastName: "Steuber",
      email: "Marcelino.Morar@hotmail.com",
      salary: "24605",
      photo1: "https://picsum.photos/seed/uQMOpnD/1080/1080",
      photo2: "https://picsum.photos/seed/mhVmZ/1080/1080",
      photo3: "https://picsum.photos/seed/erDIpWtV/1080/1080",
    },
    {
      id: 11,
      date: "2023-06-26",
      firstName: "Audie",
      lastName: "Jacobi-Crist",
      email: "Gideon_Pouros@yahoo.com",
      salary: "20469",
      photo1: "https://picsum.photos/seed/Z4MmZ03q/1080/1080",
      photo2: "https://picsum.photos/seed/1wJDnI/1080/1080",
      photo3: "https://picsum.photos/seed/NxLi9/1080/1080",
    },
    {
      id: 12,
      date: "2023-04-10",
      firstName: "Stephon",
      lastName: "Dare",
      email: "Flossie_Friesen@gmail.com",
      salary: "28419",
      photo1: "https://picsum.photos/seed/s3fz7CVPnW/1080/1080",
      photo2: "https://picsum.photos/seed/uJ0RR/1080/1080",
      photo3: "https://picsum.photos/seed/jvvoFcV/1080/1080",
    },
    {
      id: 13,
      date: "2021-10-29",
      firstName: "Jacquelyn",
      lastName: "Parker",
      email: "Carmine.Lindgren43@yahoo.com",
      salary: "16082",
      photo1: "https://picsum.photos/seed/nDKObLU/1080/1080",
      photo2: "https://picsum.photos/seed/F8SBmCX5L/1080/1080",
      photo3: "https://picsum.photos/seed/GEkIR/1080/1080",
    },
    {
      id: 14,
      date: "2022-08-26",
      firstName: "Jan",
      lastName: "Rohan",
      email: "Scot.Lindgren@gmail.com",
      salary: "10602",
      photo1: "https://picsum.photos/seed/FP5d4/1080/1080",
      photo2: "https://picsum.photos/seed/kdDly/1080/1080",
      photo3: "https://picsum.photos/seed/roP5B1fHa/1080/1080",
    },
    {
      id: 15,
      date: "2021-05-15",
      firstName: "Kianna",
      lastName: "Padberg",
      email: "Kirk94@yahoo.com",
      salary: "20001",
      photo1: "https://picsum.photos/seed/Za6CMpR6/1080/1080",
      photo2: "https://picsum.photos/seed/FJFfG0yKOg/1080/1080",
      photo3: "https://picsum.photos/seed/Xo0WCC/1080/1080",
    },
    {
      id: 16,
      date: "2022-12-07",
      firstName: "Jovan",
      lastName: "Runte",
      email: "Brain63@yahoo.com",
      salary: "12346",
      photo1: "https://picsum.photos/seed/EZApUr9HM/1080/1080",
      photo2: "https://picsum.photos/seed/ocTdVZ/1080/1080",
      photo3: "https://picsum.photos/seed/ooD4F/1080/1080",
    },
    {
      id: 17,
      date: "2020-08-14",
      firstName: "Leonel",
      lastName: "Ernser",
      email: "River.Baumbach47@hotmail.com",
      salary: "29149",
      photo1: "https://picsum.photos/seed/2h1sy9s/1080/1080",
      photo2: "https://picsum.photos/seed/7XLvF/1080/1080",
      photo3: "https://picsum.photos/seed/R2t1afLO/1080/1080",
    },
    {
      id: 18,
      date: "2020-11-18",
      firstName: "Salma",
      lastName: "Buckridge",
      email: "Stan46@hotmail.com",
      salary: "24359",
      photo1: "https://picsum.photos/seed/0t3dV5m4p9/1080/1080",
      photo2: "https://picsum.photos/seed/FdV9kF/1080/1080",
      photo3: "https://picsum.photos/seed/Ro4CnP/1080/1080",
    },
    {
      id: 19,
      date: "2020-04-28",
      firstName: "Nora",
      lastName: "Reilly",
      email: "Delaney_Klein@hotmail.com",
      salary: "17305",
      photo1: "https://picsum.photos/seed/CTJbdPfsN/1080/1080",
      photo2: "https://picsum.photos/seed/T7dmgLMOs/1080/1080",
      photo3: "https://picsum.photos/seed/WjIUwe/1080/1080",
    },
    {
      id: 20,
      date: "2021-05-09",
      firstName: "Amelie",
      lastName: "Leffler",
      email: "Chester_Will@gmail.com",
      salary: "22522",
      photo1: "https://picsum.photos/seed/KqDOy/1080/1080",
      photo2: "https://picsum.photos/seed/euYcDO/1080/1080",
      photo3: "https://picsum.photos/seed/iNSj1/1080/1080",
    },
  ]
  const onRowClick = (record: any) => {
    router.push(`/page-b/edit/${record.id}`)
  }

  return (
    <Space size={20} direction="vertical" style={{ width: "100%" }}>
      <Table
        columns={columns}
        dataSource={data.map((item, index) => ({ ...item, key: index }))}
        onRow={(record) => {
          return {
            onClick: () => {
              onRowClick(record)
            },
          }
        }}
      />
    </Space>
  )
}
