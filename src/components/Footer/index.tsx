import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex items-center justify-between header__inner">
          <div className="header__left">
            <Link href="/" className="text-base">
              NFT Art Marketplace ZEZI
            </Link>
          </div>
          <div className="header__right">
            <Link href="/" className="typo-custom-3 uppercase black header__button">
              Market place
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header