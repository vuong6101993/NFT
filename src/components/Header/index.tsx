import Link from 'next/link'
import { Menu, MenuProps, Space } from 'antd'
import { HeartOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import HeaderWrapper from "./styles";

const items: MenuProps['items'] = [
  {
    label: 'ホーム',
    link: '/'
  },
  {
    label: 'マーケットプレイス',
    link: '/market-place'
  },
  {
    label: 'コミュニティー',
    link: '/community'
  },
  {
    label: 'ブログ',
    link: '/blog'
  },
].map((item, index) => ({
  key: index,
  label: (
    <Link className='text-base text-back font-medium' href={item.link} rel="noopener noreferrer">
      {item.label}
    </Link>
  )
}));

const Header = () => {
  return (
    <HeaderWrapper className="header sticky top-0 left-0">
      <header className="header p-6 sticky top-0 left-0">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-base font-bold header__logo">
              NFT Art Marketplace ZEZI
            </Link>
            <Menu theme="light" mode="horizontal" items={items} className='justify-center' style={{ border: 'none', lineHeight: 0, flex: 'auto' }} />
            <Space size={16}>
              <Link href="/">
                <HeartOutlined className="w-6 h-6 text-black"/>
              </Link>
              <Link href="/">
                <UserOutlined className="w-6 h-6 text-black"/>
              </Link>
              <Link href="/">
                <ShoppingCartOutlined className="w-6 h-6 text-black"/>
              </Link>
            </Space>
          </div>
        </div>
      </header>
    </HeaderWrapper>
  )
}

export default Header