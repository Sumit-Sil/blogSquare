import { allBlogsAPICall} from "@/Api/Functions/allBlogs.api";
import {
  allcatagoryFn,
} from "@/Api/Functions/allcatagory.api";
import { bannerFn} from "@/Api/Functions/banner.api";
import { bannerimagesFn } from "@/Api/Functions/bannerphoto.api";
import { blogDetailsAPICall } from "@/Api/Functions/blogdetails.api";
import { blogimagesFn } from "@/Api/Functions/blogimages.api";
import { courseFn} from "@/Api/Functions/course.api";
import { courseimagesFn } from "@/Api/Functions/courseimages.api";
import {latestPostFn } from "@/Api/Functions/letestpost.api";
import {  serviceFn } from "@/Api/Functions/service.api";
import { showCommentFn} from "@/Api/Functions/showComments.api";
import { teamFn} from "@/Api/Functions/team.api";
import { teamImgFn } from "@/Api/Functions/teamimages.api";
import { testiimageFN } from "@/Api/Functions/testiimages.api";
import {testiFn} from "@/Api/Functions/testimonial.api";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { useGlobalHooks } from "./GlobalHokks";
import { addcommentfn, addCommentprops, IaddCommentProps } from "@/Api/Functions/addcomment.api";
import { courseProps, IallBlogsProps, Iallcatagoryprops, IbannerProps, IletestPost, IserviceProps, Ishowcommentprops, showcommentprops, teamProps, testiProps } from "@/TypeScript/interface/cms.interface";

export const allBlogsQuery = (): UseQueryResult<IallBlogsProps, unknown> => {
  return useQuery({
    queryKey: ["BLOGS"],
    queryFn: allBlogsAPICall,
  });
};

export const letestQuery = (): UseQueryResult<IletestPost, unknown> => {
  return useQuery<IletestPost, void>({
    queryKey: ["LETEST"],
    queryFn: latestPostFn,
  });
};

export const allcategoryQuery = (): UseQueryResult<
  Iallcatagoryprops,
  unknown
> => {
  return useQuery<Iallcatagoryprops, void>({
    queryKey: ["CATEGORY"],
    queryFn: allcatagoryFn,
  });
};

export const blogimagesQuery = (blogid: string) => {
  return useQuery({
    queryKey: ["blogImage", blogid],
    queryFn: () => blogimagesFn(blogid),
  });
};

export const serviceQuery = ():UseQueryResult<IserviceProps,unknown> => {
  return useQuery<IserviceProps,void>({
    queryKey: ["SERVICE"],
    queryFn: serviceFn,
  });
};

export const testiQuery = ():UseQueryResult<testiProps,unknown> => {
    return useQuery<testiProps,unknown>({
      queryKey: ["TESTIMONIAL"],
      queryFn:testiFn
   
    });
  };

  export const testiimagesQuery = (id: string) => {
    return useQuery({
      queryKey: ["testiImage", id],
      queryFn: () => testiimageFN(id),
    });
  };

  export const teamQuery = ():UseQueryResult<teamProps,unknown> => {
    return useQuery<teamProps,unknown>({
      queryKey: ["TESTIMONIAL"],
      queryFn:teamFn
   
    });
  };
export const teamImageQuery=(teamId:string)=>{
  return useQuery({
    queryKey:["TEAMIMAGE",teamId],
    queryFn:()=>teamImgFn(teamId)
  })
}

export const courseQuery = ():UseQueryResult<courseProps,unknown> => {
  return useQuery<courseProps,unknown>({
    queryKey: ["COURSE"],
    queryFn:courseFn
 
  });
};
export const courseImageQuery=(cId:string)=>{
  return useQuery({
    queryKey:["COURSEIMAGE",cId],
    queryFn:()=>courseimagesFn(cId)
  })
}

export const showCommentQuery=(id:string):UseQueryResult<showcommentprops,unknown>=>{
  return useQuery<Ishowcommentprops,unknown>({
    queryKey:["COMMENT",id],
    queryFn:()=>showCommentFn(id)
  })
}

export const bannerQuery=():UseQueryResult<IbannerProps,unknown>=>{
  return useQuery<IbannerProps,unknown>({
   
    queryKey:["BANNER"],
    queryFn:bannerFn
  })
}


export const bannerphotoquery=(id:string)=>{
return useQuery({
  queryKey:["BANNER",id],
  queryFn:()=>bannerimagesFn(id)
})
}

export const addcommentQuery=(id:string)=>{
const {queryClient}=useGlobalHooks()
return useMutation({
  mutationFn:(payload:addCommentprops)=>addcommentfn(id,payload),
  onSuccess:(data)=>{
    queryClient.invalidateQueries({queryKey:["BLOGS"]})
console.log(data,"data of comments adding")
  }
})
}