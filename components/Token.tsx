'use client'
import React from 'react'
import Image from 'next/image'
import tokenImg from '@/public/token.png'
import ProgressBar from './ProgressBar'


type PageProps = {
    level: number;
    token: number;
    pointsSinceLastLevel: number;
}

export default function Token({ level, token, pointsSinceLastLevel }: PageProps) {
    let loopTimes = []
    if (level == 7) {
        return <>Mastered</>
    } else if (level == 6) {
        loopTimes = [...Array(3)]
        let elements = loopTimes.map((image: number, index: number) => {
            index += 1
            return (
                <Image className={`inline mr-2 ${index > token ? 'opacity-25' : ''}`} alt="token" src={tokenImg} width={20} height={20} />
            )
        })
        return elements      
    } else if (level == 5) {
        loopTimes = [...Array(2)]
        let elements = loopTimes.map((image: number, index: number) => {
            index += 1
            return (
                <Image className={`inline mr-2 ${index > token ? 'opacity-25' : ''}`} alt="token" src={tokenImg} width={20} height={20} />
            )
        })
        return elements
    } else {
       return <ProgressBar level={level} pointsSinceLastLevel={pointsSinceLastLevel}/> 
    }
   
}
