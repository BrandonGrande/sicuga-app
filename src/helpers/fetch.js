const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWithoutToken = async(endPoint,data,method = 'GET') =>{
    const url= `${baseUrl}/${endPoint}`;
    if (method ==='GET'){
        const resp = await fetch(url);
        return resp;
    }else{
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        return resp;
    }
}

export const fetchWithToken = async(endPoint,data,method = 'GET') =>{
    const url= `${baseUrl}/${endPoint}`;
    const token = localStorage.getItem('token') || '';
    if (method ==='GET'){
        const resp = await fetch(url,{
            method,
            headers:{
                'JwtTokenProvider':'Bearer ' + token
            }
        });
        return resp;
    }else{
        const resp = await fetch(url,{
            method,
            headers:{
                'Content-type':'application/json',
                'JwtTokenProvider':'Bearer ' + token
            },
            body: data !==null ? JSON.stringify(data) : null
        });
        return resp;
    }

}