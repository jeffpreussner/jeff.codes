import React from "react";

export const Navbar = ({ links }) => {
  return links?.length ? (
    <nav className="navbar is-transparent">
      <div className="site__links">
        <ul className="site__btn-group">
          {links.map((i) => (
            <li>
              <a className="site__btn site__btn--launched" href={i.url}>
                {i.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  ) : (
    false
  );
};
