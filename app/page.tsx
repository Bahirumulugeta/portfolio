import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
import json_data from "../data.json"
async function getData() {
  return json_data
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='fixed z-30 flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-50 text-primary dark:bg-ink'>
          <FaNodeJs size={72} className='text-primary' />
          <p className='text-lg text-slate-600 dark:text-slate-300'>Loading portfolio</p>
        </div>
      }
    </>
  )
}