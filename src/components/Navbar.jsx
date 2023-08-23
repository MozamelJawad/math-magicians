import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: 'calculator', text: 'Calculator' },
    { path: 'quote', text: 'Quote' },
  ];

  return (
    <nav className="navbar">
      <h1>Math Magician</h1>
      <ul>
        {links.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                color: isActive ? 'yellowgreen' : undefined,
              })}
            >
              {link.text}
            </NavLink>

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
