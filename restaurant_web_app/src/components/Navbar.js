import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Component } from "react"
import LogoImg from "../assets/logo.png"

class Navbar extends Component {
  state={clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render(){
  return (
    <nav className="nav">

      <Link to="/" className="site-logo">
        <img src={LogoImg} height={50} />
      </Link>
      <ul id="nav_list" className={this.state.clicked ? "#nav_list active" : "nav_list"}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/menu">Meniu</CustomLink>
        <CustomLink className="order-img" to="/comenzi"><i class="fa fa-bag-shopping"></i></CustomLink>
        <CustomLink to="/about">Despre</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink className="btn btn-primary" to="/booktable">Rezervare</CustomLink>
      </ul>
      <div id="nav_icon" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  )
}
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar