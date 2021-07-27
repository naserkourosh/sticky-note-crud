import React from 'react'

export default function StickyText(props) {
    return (
        <li>
    <a href="#" contenteditable>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </a>
  </li>
    )
}
