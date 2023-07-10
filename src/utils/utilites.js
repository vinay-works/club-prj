import supabaseClient from "./supabaseClient";

export const getUser = async () => { 
    const user = await supabaseClient.auth.getUser();
    return user;
}

export const userFun = async (urlPath, body) => { 
    const BACKEND_URL = 'https://vinayaka-project-backend.onrender.com/api/users/';
    const url = BACKEND_URL + urlPath;

    const headers = {
        "Content-Type": "application/json",
    };

    const res = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    if(res) {
        const json = await res.json();  
        return { status: res.status, message: json.message };
    } else {
        return { status: 500, message: "Something went wrong" };
    }
}