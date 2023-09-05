import championData from '../../data/championData'


export function filterChampions(championId: number | string) {
    for (const [keys, value] of Object.entries(championData)) {
        const {key} = value
        if(key == championId) {
            return value.name
        }
      }
}