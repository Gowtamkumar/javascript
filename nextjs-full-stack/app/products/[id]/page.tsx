'use client'
import { useParams } from 'next/navigation'
import React from 'react'

export default function Product() {
  const param = useParams()
  console.log("🚀 ~ param:", param)
  return (
    <div> Single Product</div>
  )
}
