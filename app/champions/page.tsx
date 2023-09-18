'use client'
import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Image from 'next/image'
import Link from 'next/link'
import { filterChampions } from '../helper/championFilter'


type MyType = {
  name: string;
  image: string;
}

export default function Champions() {
  const [filteredChampion, setFilteredChampion] = useState(filterChampions)
  const [allChampions, setAllChampions] = useState(filterChampions)
 
  function filterChampion(searchValue: string) {
    if(searchValue.length === 0) {
      setFilteredChampion(filterChampions)
    } else {
      setFilteredChampion(allChampions.filter(champion => {
        if (champion.name.toLowerCase().includes(searchValue.toLowerCase())) return champion;
      }))
    }
  }

  return (
    <>
      <Container className='p-24 bg-slate-900 opacity-90 '>
        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => filterChampion(e.target.value)} id="filled-basic" sx={{color: 'blue'}} InputLabelProps={{sx:{color: '#3777E2'}}} inputProps={{sx: {color: '#E2E8F0'}}} fullWidth={true} label="Filter" variant="filled" className='mb-10 text-slate-200' />
        <Grid container>
          {filteredChampion && filteredChampion.map((val: MyType, key: number) => {
            return (
              <Grid className='mb-5 shadow-none' key={key} item md={1.5} spacing={3}>
                <Link href={`/champions/${val.name}`}>
                  <Card className='shadow-none bg-slate-900 text-slate-200' sx={{ maxWidth: 80}}>
                    <Image
                      src={val.image}
                      width={80}
                      height={80}
                      alt={val.name}
                    />
                    <Typography noWrap variant="body1" align='center'>
                      {val.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
