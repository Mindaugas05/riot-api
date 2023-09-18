'use client'
import { useEffect, useState, useCallback } from 'react'
import Skeleton from './Skeleton';
import Token from './Token';
import axios from 'axios'
import dateCalculator from '@/app/helper/dateCounter';
import { getChampionByName } from './../app/helper/championFilter'
import Link from 'next/link'
import Image from 'next/image'
import chest from '@/public/chest.png'


type PageProps = {
  data: {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    server: string;
  }
}

type ChampMastery = {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;  
  lastPlayTime: number;
  puuid: string;
  summonerId: string;
  tokensEarned: number;
}

export default function Table({ data }: PageProps) {
  const [champMastery, setChampMastery] = useState<any>()
  let countLevel = 0
  let countPoints = 0

  const myCallback = useCallback(async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/championMastery', {
        summoner: { id: data.id, server: data.server }
      });      
      setChampMastery(response.data)
    } catch (err) {
      console.log(err)
    }
  }, [data.id, data.server])

  useEffect(() => {
    myCallback()
  }, [myCallback])




  if (!champMastery) {
    return <Skeleton />
  }

  return (
    <div className='w-4/5'>
      <table className='order-collapse table-fixed w-full text-sm bg-cyan-950 rounded-xl'>
        <thead className=''>
          <tr>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Champion</th>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Level</th>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Points</th>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Last Played</th>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Chest available</th>
            <th className='border-b border-slate-600 font-medium p-4 pl-8 pb-3 text-slate-200 text-left'>Progress</th>
          </tr>
        </thead>
        <tbody className='bg-slate-800'>
          {champMastery && champMastery.map((val: ChampMastery, key: number) => {
            let champion = getChampionByName(val.championId)
            let link = `/champion/${champion}`
            let output: string | number = val.championLevel == 7 ? "Mastered" : '';
            countLevel += val.championLevel
            countPoints += val.championPoints
            if (val.championLevel == 7) {
              output = "Mastered"
            } else if (val.championLevel == 6) {
              output = 3
            } else if (val.championLevel == 5) {
              output = 2
            } else {
              output = ''
            }
            return (
              <>
                <tr key={key}>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'><Link href={link}>{champion}</Link></td>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{val.championLevel}</td>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{new Intl.NumberFormat().format(val.championPoints)}</td>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>{dateCalculator(val.lastPlayTime)}</td>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'><Image className={!val.chestGranted ? 'opacity-20' : ''} alt="chest"
                    src={chest}
                    width={20}
                    height={20} /></td>
                  <td className='border-b border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    <>
                      <Token
                        level={val.championLevel}
                        token={val.tokensEarned}
                        pointsSinceLastLevel={val.championPointsSinceLastLevel} /></>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'>{champMastery.length}</th>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'>{countLevel}</th>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'>{new Intl.NumberFormat().format(countPoints)}</th>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'></th>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'></th>
            <th className='border-slate-600 font-medium p-4 pl-8 text-slate-200 text-left'></th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
