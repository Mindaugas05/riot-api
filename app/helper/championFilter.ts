import championData from '../../data/championData'

type MyType = {
    name: string[];
    image: string;
}

type ChampionType = {
    name: string;
    image: string;
}

export function getChampionByName(championId: number | string) {
    for (const [keys, value] of Object.entries(championData)) {
        const {key} = value
        if(key == championId) {
            return value.name
        }
      }
}

export function filterChampions() {
    let cardValues: Array<ChampionType> = []
    for (const [keys, value] of Object.entries(championData)) {
      let link = `http://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${value.image.full}`
      cardValues = [...cardValues, { name: value.name, image: link }]
    }
    return cardValues
}

export function filterSkins() {
    // let skinValues: Array<MyType> = [];
    // for (const [keys, value] of Object.entries(championData)) {        
        // skinValues = [...skinValues, { name: [...value.skins], image: link }]
    //   }
}