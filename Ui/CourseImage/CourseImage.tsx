import { courseImageQuery } from '@/CustomHooks/cms.query.hooks'
import React from 'react'

const CourseImage = ({cId}:{cId:string}) => {
    const {data,isLoading,error}=courseImageQuery(cId);
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
        <img src={data} style={{height:"200px",width:"150px"}} alt={`image for id:${cId}`}/>
      
    </div>
  )
}

export default CourseImage
