import { sleep } from '@/lib/utils';
import React from 'react'

const page = async() => {

  await sleep(2000);
  return (
    <div><h1>thi is a homepage</h1></div>
  )
}

export default page