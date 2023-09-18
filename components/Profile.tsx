'use client'
import { useDataContext } from '@/context/dataContext'
import dateCalculator from '@/app/helper/dateCounter';
import Image from 'next/image'

export default function Profile() {
    const { data, setData } = useDataContext();
    const srcUrl = `http://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/${data?.profileIconId}.png`

    return (
        <div className="h-fit mx-10 w-4/5 my-10">
            {

                data && (
                    <div className="text-left text-slate-200 ">
                        <Image
                            className='border rounded border-sky-500'
                            alt="Profile image"
                            src={srcUrl}
                            width={100}
                            height={100}
                        />
                        <div>Name: {data.name}</div>
                        {/* <div>Revision Date: {dateCalculator(data.revisionDate)}</div> */}
                    </div>
                )

            }
        </div>
    )
}
