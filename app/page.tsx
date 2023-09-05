'use client'
import Profile from '@/components/Profile'
import Table from '@/components/Table'
import { useDataContext } from '@/context/dataContext';


export default function Home() {
  const { data } = useDataContext()
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 p-24">
      <Profile/>
      {data && <Table data={data} />}
           
    </main>
  )
}
