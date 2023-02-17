import React from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'

const Navigation = () => {
  const router = useRouter()

  const extraTags = [
    'Getting Started',
    'Pricing & Plan',
    'Selling',
    'Creating',
    'Security',
    'Blockchains',
    'FAQ'
  ]

  return (
    <nav className={styles.nav}>
      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>Community</span>
      </NavItem>

      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Tags</span>
      </NavItem>

      {extraTags.map((item, idx) => (
        <NavItem
          key={idx}
          href={`/?tag=${encodeURI(item)}`}
          selected={router.pathname == `/?tag=${encodeURI(item)}`}
        >
          <span>{item}</span>
        </NavItem>
      ))}

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <span>Member</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
