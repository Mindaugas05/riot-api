import { NextResponse } from "next/server";
import axios from "axios";

const apiKey: string | undefined = process.env.RIOT_TOKEN

export async function GET(request: Request) {
    return NextResponse.json('Hello, Next.js!');
}

export async function POST(request: Request) {
    const data = await request.json();
    console.log(apiKey)
    // no data validation yet or rate limit
    try {      
        const summonerData = await axios.get(
            `https://${data.summoner.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${data.summoner.nickname}`, {
                headers: {
                    "X-Riot-Token": process.env.RIOT_TOKEN
                }
            }
        );
        const {id} = summonerData.data
        console.log(id)

        return NextResponse.json({...summonerData.data, server: data.summoner.region})            
    } 
    catch(error) {
        console.log(error)  
        return error   
    }  
}