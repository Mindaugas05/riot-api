"use client"
import { useState, useEffect } from "react"
import options from "@/data/serverOptions"
import Axios from "axios"
import { useDataContext } from "@/context/dataContext"

type OptionTypes = {
    label: string;
    value: string;
};

export default function Search() {
    const [region, setRegion] = useState<string>(options[0].value)
    const [nick, setNickname] = useState<string>('')
    const {data, setData}: any = useDataContext()

    // const id = useId();

    useEffect(() => {        
    }, [data])
   
    const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(data && data.name === nick) {
            return
        }
        try {
            const response = await Axios.post('http://localhost:3000/api/summoner', {
                summoner: { region: region, nickname: nick }
            });
            if(response.status !== 200){
                setData(null)
                throw new Error('something is wrong')
            }
            setData(response.data)
        } catch (err) {
            console.log(err)
        }

    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-center rounded-full bg-white rounded-r-full h-12">
                <div className="flex">
                    <div className="cursor-pointer bg-white flex ml-5 w-20 my-2  border-r-2 border-l-gray-200" >
                        <select className="bg-white cursor-pointer" id="euw" value={region} onChange={(e) => setRegion(e.target.value)}>
                            {options.map((option: OptionTypes, index) => {
                                return <option key={index} value={option.value}>{option.label}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex">
                    <input className="placeholder:text-grey-300  w-96 px-5 py-2 outline-none" id="searchHome" onChange={(e) => setNickname(e.target.value)} name="search" type="text" placeholder="Name..." value={nick} />

                </div>
                <button className="w-24 px-5 my-2  border-l-2 border-l-gray-200" type="submit">.GG</button>

            </form>
          
        </>
    )
}