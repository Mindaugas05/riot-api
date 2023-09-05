
export default function dateCalculator(unixTimestamp: number) {        
        const dateObject = new Date(unixTimestamp).toLocaleDateString("en-US")
        
    return dateObject
}