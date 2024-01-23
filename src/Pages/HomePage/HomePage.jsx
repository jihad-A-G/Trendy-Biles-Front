import React from 'react'
import { useLoaderData } from 'react-router'
export default function HomePage() {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>{data.aboutusContent.content}</div>
  )
}
//  import React from 'react'
 
//  export default function HomePage() {
//    return (
//      <div>HomePage</div>
//    )
//  }
 