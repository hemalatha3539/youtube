import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Uvedio=(props)=>{
  return <div className="u-vedio">
    <img className="thumb" src={props.data.snippet.thumbnails.high.url}></img>
    <h3 className="u-data">{props.data.snippet.title}</h3>
    <p className="u-data">{props.data.snippet.channelTitle}</p>
    <p className="u-data">{props.data.statistics.viewCount}</p>

  </div>

}
 const Edio=()=>{
  const [Array,setArray]=useState([])
    async function youtube(){
      const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDkFWHPXooekbmyLwleMHhS_dxLtnWqtxQ")
      const OriginaData=await data.json()
      console.log(OriginaData.items)
      setArray(OriginaData.items)
    }
useEffect(()=>{
  youtube()
},[])
return <div className='vedio-conta'>
      {
        Array.map((x)=>{
          return <Link to={"/vedio/"+x.id} className="link"><Uvedio data={x}/></Link>
        })
        
      }
      
    </div>
 }
export  default Edio;