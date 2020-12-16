import {api_url,contry,category,api_key} from '../config/Api_config';

export async function getArticles(){
 try {
    let articles = await fetch(`${api_url}?country=${contry}&category=${category}`,{
        headers:{
            'X-API-KEY': api_key
        }
    });
    let results = await articles.json();
    articles = null ;
    return results.articles;

 } catch (error) {
     throw error;
 }
}