export default function Header () {
  return (
    <header className="header">
      <div className="logo"><a className="logo" href="#" aria-label="на главную"></a></div>
      <div className="navbar">
        <a className="nav-link" href="/">Все</a>
        <a className="nav-link" href="/cars">Машины</a>
        <a className="nav-link" href="/animals">Животные</a>
        <a className="nav-link" href="/people">Люди</a>
        <a className="nav-link" href="/nature">Природа</a>
        <a className="nav-link" href="/other">Другое</a>
      </div>
    </header>

    
  )
}
