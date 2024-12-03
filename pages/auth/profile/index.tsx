import Link from 'next/link'
import React from 'react'

const profile = () => {
  return (
    <div>
      my profile
     <Link href={`/auth/profile/${uid}`}></Link>
    </div>
  )
}

export default profile
