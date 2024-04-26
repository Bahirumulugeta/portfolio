import { FaNodeJs } from "react-icons/fa"
import HomePage from "./HomePage"
import { data } from "@/types/main";

// import { ref, get } from "firebase/database"
// import { database } from "@/firebase"
import json_data from "../data.json"
async function getData() {

  // return await (await get(ref(database))).val()
  // const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL + '/.json'
  // const res = await fetch(DB_URL, { cache: 'no-store' })
  // const data = res.json()
  return json_data
}

export default async function page() {

  const data = await getData()

  return (
    <>
      {data ?
        <HomePage data={data} />
        :
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-primary-main fixed z-30 bg-gray-100 dark:bg-grey-900'>
          <FaNodeJs size={100} className='animate-pulse' />
          <p className='animate-pulse text-xl'>Loading...</p>
        </div>
      }
    </>
  )
}