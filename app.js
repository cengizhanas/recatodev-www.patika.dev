import axios from 'axios';

const getUsers = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } =  await axios("https://jsonplaceholder.typicode.com/users/"+user_id);
        resolve(data);

    })
}
const getPost = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+user_id);
        resolve(data);


    })
}

export default async function getData (user_id){
    try {
        const users = await getUsers(user_id); 
        const posts = await getPost(user_id); 

        const array = [users, posts] 
        return array; 
  
      } catch (e) {
        console.log(e); 
      }
  
}
