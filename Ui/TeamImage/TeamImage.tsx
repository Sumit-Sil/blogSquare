import { teamImageQuery } from '@/CustomHooks/cms.query.hooks'
import React from 'react'

const TeamImage = ({teamId}:{teamId:string}) => {
    const{data:imgData,isLoading,error}=teamImageQuery(teamId)
    console.log("image",imgData)
if(isLoading){
    return(<>
    <p>Image is Loading</p>
    
    </>)
}
if(error){
    return(<>
    <p>No Image to Show:{error.message}</p>
    
    </>)
}
  return (
    <div>
        <img src={imgData} style={{height:"200px",width:"100%"}} alt={`image for ${teamId}`}/>
      
    </div>
  )
}

export default TeamImage
