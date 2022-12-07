const fetchData = () => fetch("https://northwind.vercel.app/api/product");

// const fetchWithRetries = addRetries(fetchData, 4);

async function addRetries(callback, number) {
    try {
       return await axios.get(callback)
    }
    catch (err){
        if(number === 1) {
            throw err
        }
        return await addRetries(callback, number-1)
    }
}

addRetries(fetchData, 4);


