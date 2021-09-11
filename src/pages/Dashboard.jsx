import React from 'react'
import Card from '../components/Card'
import CardLayout from '../layouts/CardLayout'

export default function Dashboard() {
  const dummyData = [
    {
      title: 'This is overall card',
      num: 142313,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi laudantium deleniti.',
    },
    {
      title: 'This is overall card',
      num: 142313,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi laudantium deleniti.',
    },
    {
      title: 'This is overall card',
      num: 142313,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit animi laudantium deleniti.',
    },
  ]
  return (
    <>
      <CardLayout>
        {dummyData.map((data, i) => (
          <Card
            key={i}
            title={data.title}
            num={data.num}
            desc={data.desc}
          />
        ))}
      </CardLayout>
    </>
  )
}
