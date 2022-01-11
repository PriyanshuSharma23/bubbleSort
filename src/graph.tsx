import { FC } from "react"

interface IProps {
    numArray: number[]
}


const Graph: FC<IProps> = ({ numArray }) => {

    const scale = (arr: number[],index:number):string => {
        const arrMax = Math.max(...arr);
        return `${((arr[index] / arrMax)*100)}%`;
    }


    return (
        <div className="grid">
            {numArray.map((item, index) => {
               return <div key = {index} data-heigth = {item} style = {{"height":`${scale(numArray,index)}`}} className="block"></div> 
            })}
        </div>
    )
}

export default Graph