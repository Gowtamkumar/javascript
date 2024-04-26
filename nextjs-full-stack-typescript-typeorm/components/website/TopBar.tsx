import { Button } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function TopBar() {
  return (
    <div className="flex justify-between items-center gap-5">
        <div className="flex gap-5">
          <small>Help & Support</small>
          <small>
            {" "}
            <Link href="/about">About</Link>
          </small>
        </div>
        <div>
          <Button type="primary" size="small">
            <Link href="/">Donwload App</Link>
          </Button>
        </div>
      </div>
  )
}
