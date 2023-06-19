import React from 'react'

export default function NavItem(props) {
  return (
        <div>
               <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.name}</a>
        </li>
        </div>
  )
}
