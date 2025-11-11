import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
      <div className="">
        <div className="">
          <div className="">
            <Link href={"/"}>
              <span>ShopeeJapan</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header