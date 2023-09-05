import { notFound } from 'next/navigation'
import axios from 'axios';
import Link from 'next/link';
import Table from '@/components/Table';

interface pageProps {
  params: {id: string[]};
}


export default async function Summoner({params}: pageProps)  {

  if (params.id.length === 2) {
    const server = params.id[0]
    const name = params.id[1]
     

    try {      
      const summonerInfo = await axios.get(
          `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`, {
              headers: {
                  "X-Riot-Token": "RGAPI-676b1efb-1427-4b04-90aa-d5dc586d0e3e"
              }
          }
      );

    //  Encrypted summoner ID. Max length 63 characters. 
    const {id} = summonerInfo.data
    console.log(id)      
  //   const moreInfo = await axios.get(
  //     `https://${server}.api.riotgames.com//lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`, {
  //         headers: {
  //             "X-Riot-Token": "RGAPI-c15c1dac-32a6-4488-9799-30de57305a1f"
  //         }
  //     }
  // );
          
          
  } 
  catch(error) {
      console.log(error)  
      return error   
  } 

    return (
      <>
        
        <Link href="http://ddragon.leagueoflegends.com/cdn/13.15.1/img/profileicon/685.png"/>

        {/* <Table champions={summonerInfo.data}/> */}
      </>
    )
  } else {
    notFound()
  } 
}

