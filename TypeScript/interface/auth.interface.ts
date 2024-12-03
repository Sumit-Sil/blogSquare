export interface IloginProps{
    email:string,
    password:string,
    token:string,
    message:string,
    status:number
    photo:BinaryType,
    name:string,
    _id:string
    }
    export interface loginProps extends IloginProps{
        user:IloginProps
    }

    export interface userRegisterResponse {
        email:string,
        password:string,
        mobile:string,
        name:string,
        photo:BinaryType
        
      }
      export interface UpdatePasswordProps {
        // oldPassword: string;
        password: string;
      }