import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <div>
            <li><a href={'/addreceipe'}>Add Receipe</a></li>
            <li><a href={'/showreceipes'}>Show Receipe</a></li>
        </div>
    </div>
  )
}

