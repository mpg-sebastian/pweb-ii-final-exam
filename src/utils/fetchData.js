export const fetchData = (url) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetch(url);
        const json = await data.json();
        resolve(json);
      } catch (error) {
        reject(error);
      }
    });
  };

  export const postData = (url, data) => {
    return new Promise(async (resolve, reject) => {
        try{
            const dataPost = await fetch(url, {
                method: 'POST',
                body: data,
            });
            const json = await dataPost.json();
            resolve(json);
        } catch(error){
            console.log("error rejected", error);
            reject(error);
        }
    });
}