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
                    <div className="text-left">
                        <Image
                             alt="Profile image"
                             src={srcUrl}
                             width={100}
                             height={100}                             
                        />
                        {/* <div>Id: {data.accountId}</div> */}
                        {/* <div>AccountId: {data.id}</div> */}
                        {/* <div>Puuid: {data.puuid}</div> */}
                        <div>Name: {data.name}</div>
                        {/* <div key={data.id + id}>Profile Icon Id: {data.profileIconId}</div> */}
                        <div>Revision Date: {dateCalculator(data.revisionDate)}</div>
                        {/* <div>Summoner level: {data.server}</div> */}
                    </div>
                )

            }
        </div>
    )
}
