import logosvg from '../../svg/logo.svg'

const Header = () => {
  const descLogo = 'This is the logo of the blog.'

  return (
    <>
      <header className='flex-space-between'>
        <div className="logo">
          <img src={logosvg} alt={descLogo} />
        </div>
        <div className="search">
          <input type="text" className="input-search" name="Search..." />
        </div>
        <ul className="menu">
          <li><a href="#categories" className='nav-link'>Categories</a></li>
          <li><a href="#about" className='nav-link'>About</a></li>
          <li><a href="#contact" className='nav-link'>Contact</a></li>
        </ul>
      </header>
    </>
  )
}

export default Header
