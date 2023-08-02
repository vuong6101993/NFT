import { Tabs, Card, Button, Image, Row, Col } from 'antd'
import React, { useState } from 'react'
import ListGridCardWrapper from "./styles";

const tabItems = [
  {
    data: [
      {
        image: '/images/login-bg.png',
        title: 'The Metapuffers 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '18.75 ETH'
      },
      {
        image: '/images/login-bg.png',
        title: 'The Metapuffers 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '28.75 ETH'
      }
    ]
  },
  {
    data: [
      {
        image: '/images/login-bg.png',
        title: 'The Metapuffers 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '15 ETH'
      },
      {
        image: '/images/login-bg.png',
        title: 'The Metapuffers 2.0',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        price: '23.15 ETH'
      }
    ]
  }
]

const GridCard = (props: any) => {
  const [isActive, setIsActive] = useState('1')
  return (
    <ListGridCardWrapper>
      <div>
      <h3 className="text-5xl">アートカテゴリ</h3>
      <Tabs
        className='tabs--buttons'
        defaultActiveKey="1"
        centered
        onTabClick={(e) => setIsActive(e)}
        items={tabItems.map((item, index) => {
          const id = String(index + 1)
          return {
            label: (
              <Button className={isActive === id ? '' : 'button--none'} type='primary'>Tab ${id}</Button>
            ),
            key: id,
            children: (
              <>
                {
                  item.data.map((item, index) => {
                    return {
                      <p>{item.price}</p>
                    }
                  })
                }
              </>
              // <p>{item.data[0].price}</p>
              // <Row gutter={16}>
              //   <Col span={8}>
              //     <Card
              //       className='card--custom'
              //       cover={<Image alt={item.title} src={item.image} />}
              //       bordered={false} 
              //     >
              //       <div className="flex flex-col relative text-white card__footer">
              //         <ul className="absolute top-6 left-6 d-none">
              //           <li>1aaa</li>
              //           <li>2aaa</li>
              //         </ul>
              //         <div className="flex flex-col pb-4 w-full">
              //           <h3 className='text-xl font-medium'>{item.title}</h3>
              //           <p className='mt-2 text-sm opacity-70'>{item.description}</p>
              //         </div>
              //         <div className="flex justify-between w-full card__footer pt-4 border-t border-white-light-1">
              //           <Button type='primary'>購入する</Button>
              //           <div className="flex flex-col">
              //             <p className="text-xs opacity-70">Current Bid</p>
              //             <p className="text-base font-medium">{item.price}</p>
              //           </div>
              //         </div>
              //       </div>
              //     </Card>
              //     </Col>
              // </Row>
            ),
          };
        })}
      />
      </div>
    </ListGridCardWrapper>
  )
}

export default GridCard
