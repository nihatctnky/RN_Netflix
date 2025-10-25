import Client from "./instance";


export async function  getRequest (URL:string,params:object){
    const response= await Client.get(URL,{params:params})
    return response
}

export async function  postRequest (URL:string,payload:object){
    const response= await Client.post(URL,payload)
    return response
}

export async function  patchRequest (URL:string,payload:object){
    const response= await Client.patch(URL,payload)
    return response
}
export async function  putRequest (URL:string,payload:object){
    const response= await Client.put(URL,payload)
    return response
}
export async function  deleteRequest (URL:string,payload:object){
    const response= await Client.delete(URL,payload)
    return response
}