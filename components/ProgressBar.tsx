import React from 'react'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

type PageProps = {
    level: number;
    pointsSinceLastLevel: number;
}

export default function ProgressBar({level, pointsSinceLastLevel}: PageProps) {
    let barPercentage = 0
    if(level == 1) {
        barPercentage = (pointsSinceLastLevel / 1800) * 100
    } else if (level == 2) {
        barPercentage = (pointsSinceLastLevel / 4200) * 100
    } else if (level == 3) {
        barPercentage = (pointsSinceLastLevel / 6600) * 100
    } else if (level == 4) {
        barPercentage = (pointsSinceLastLevel / 9000) * 100
    } else {
        barPercentage = 0
    }

    return (
        <> 
            <BorderLinearProgress variant="determinate" value={Math.round((barPercentage + Number.EPSILON) * 100) / 100} />
        </>
    )
}
