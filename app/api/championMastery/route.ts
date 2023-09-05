import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
    return NextResponse.json('Hello, Next.js!');
}

export async function POST(request: Request) {
    const data = await request.json();  
    try {      
    
        const championMastery = await axios.get(
        `https://${data.summoner.server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.summoner.id}`, {
          headers: {
              "X-Riot-Token": "RGAPI-7b942a56-fad8-4a4d-a72e-76712e77d72e"
          }
      }
  );     

        return NextResponse.json(championMastery.data)      
            
    } 
    catch(error) {
        console.log(error)  
        return error   
    }  
}