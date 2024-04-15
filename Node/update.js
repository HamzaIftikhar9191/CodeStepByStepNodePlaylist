////////////// Video # 33

const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        { name:'max 5'},
        {
            $set:{name:'max pro 5', price:1000}
        }
        ) 
    console.log(result)

}

updateData();


// ////updateOne  (only updates the first item in the database) 
// ////update   (updates all match items in the database)