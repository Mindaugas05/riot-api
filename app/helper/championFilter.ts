import championData from '../../data/championData'


export function filterChampions(championId: number | string) {
    for (const [keys, value] of Object.entries(championData)) {
        const {key} = value
        if(key == championId) {
            return value.name
        }
      }
}

// type ChampionMastery = {
//     championId?: number;
//     championLevel?: number;
//     championPoints?: number;
//     championPointsSinceLastLevel?: number;
//     championPointsUntilNextLevel?: number;
//     chestGranted?: boolean;
//     lastPlayTime?: number;
//     puuid?: string;
//     summonerId?: string;
//     tokensEarned?: number;
// }


// championId: 53
// ​​​
// championLevel: 7
// ​​​
// championPoints: 96845
// ​​​
// championPointsSinceLastLevel: 75245
// ​​​
// championPointsUntilNextLevel: 0
// ​​​
// chestGranted: false
// ​​​
// lastPlayTime: 1688771210000
// ​​​
// puuid: "pFTz5pZOg0zfnhOE0c6DODgq2fJF_NBEJm9jeT4g9Q0iF8wRi8F3BZOQTUwyW2Ley0j5RZDUQ6V9eA"
// ​​​
// summonerId: "MRkfEBCpG_vXrAWRfyfSiZWGvd70g6NW3i9cdo2eJVWvRaw"
// ​​​
// tokensEarned: 0