import { bannerphotoquery } from '@/CustomHooks/cms.query.hooks'
import React from 'react'

const BannerImage = ({id}:{id:string}) => {
    const{data,isLoading,error}=bannerphotoquery(id)
    if(isLoading){
        return(<>
        <p>Image is Loading</p>
        
        </>)
    }
    if(error){
        return(
            <>
            
            <p>Image is not availible {error.message}</p>
            </>
        )
    }
  return (
    <div>
         <img src={data} style={{height:"200px",width:"100%"}} alt={`image for id:${id}`}/>
      
    </div>
  )
}

export default BannerImage
