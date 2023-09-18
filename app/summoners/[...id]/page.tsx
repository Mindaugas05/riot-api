import { notFound } from 'next/navigation'
import axios from 'axios';


interface pageProps {
  params: {id: string[]};
}


export default async function Summoner({params}: pageProps)  {

  if (params.id.length === 2) {
    const server = params.id[0]
    const name = params.id[1]
     

  }
}

