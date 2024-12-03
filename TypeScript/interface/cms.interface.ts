interface allBlogsProps{
    _id:string,
    title:string,
    postText:string,
    catagory:string,
    comment_count:number
}
export interface IallBlogsProps extends allBlogsProps{
    data:allBlogsProps
}
interface allcatagoryprops{
    _id:string,
    category:string
}
export interface Iallcatagoryprops extends allcatagoryprops{
    data:allcatagoryprops[]
}
export interface bannerProps{
    _id:string,
    title:string,
    description:string
}
export interface IbannerProps extends bannerProps{
    bannerdata:bannerProps[]
}

export interface courseProps{
    _id:string,
    name:string,
    requirement:string,
    duration:string,
    fees:number
}
export interface IcourseProps extends courseProps{
    Courses:courseProps
}
interface letestPost{
    _id:string,
    title:string,
    postText:string,
    likes:number
}
export interface IletestPost extends letestPost{
    data:letestPost
}
interface serviceProps{
    _id:string,
    name:string,
    details:string
}

export interface AserviceProps extends serviceProps{
    data:serviceProps
}
export interface IserviceProps extends AserviceProps{
    data:IserviceProps
}

export interface showcommentprops{
    _id:string,
    name:string,
    email:string,
    comment:string
}
export interface Ishowcommentprops extends showcommentprops{
    post:showcommentprops
}

export interface teamProps{
    _id:string,
    name:string,
    possession:string
}
export interface IteamProps extends teamProps{
    TeamMember:teamProps
}
export interface testiProps{
    name:string,
    _id:string,
    talk:string,
    position:string
} 

export interface ItestiProps{
    testimonials:testiProps
}
