import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
    const data = await request.json();    
    // no data validation yet or rate limit
    try {      
        const summonerData = await axios.get(
            `https://${data.summoner.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${data.summoner.nickname}`, {
                headers: {
                    "X-Riot-Token": process.env.RIOT_TOKEN
                }
            }
        );
        return NextResponse.json({...summonerData.data, server: data.summoner.region})            
    } 
    catch(error) {
        console.log(error)  
        return    
    }  
}