import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL='http://localhost:5000/api/';

const responseBody=(response:AxiosResponse)=>response.data;

//  function responseBodyFun(response:AxiosResponse)
// {
//      return response.data;
//  }
const requests={
    get:(url:string)=>axios.get(url).then(responseBody),
    post:(url:string,body:{})=>axios.get(url,body).then(responseBody),
    put:(url:string,body:{})=>axios.get(url,body).then(responseBody),
    delete:(url:string)=>axios.get(url).then(responseBody),
}

   const  Catalog={
    list:()=>requests.get('products'),
    details:(id:number)=>requests.get(`products/${id}`)
}
const TestErrors={
    get404Error:()=>axios.get('buggy/not-found'),
    get400Error:()=>axios.get('buggy/bad-request'),
    get401Error:()=>axios.get('buggy/unauthorized'),
    get500Error:()=>axios.get('buggy/server-error'),
    getValidationError:()=>axios.get('buggy/validation-error')
   }
const agent={
    Catalog,
    TestErrors
}

export default agent; 