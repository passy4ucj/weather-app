const axios = require('axios')
const path = require('path')
const fs = require('fs')
const { response } = require('express')


const fetchData = async () => {

    try {
        const response = await axios.get('http://jsonplaceholder.typicode.com/posts')

        //const json = JSON.parse(JSON.stringify(response))
        const stringData = JSON.stringify(response.data)
        
        fs.writeFileSync(path.join(__dirname, '/result', 'post.json'), stringData, (err, data) => {
            if(err) {
                throw err
            }
            console.log(data)
        })

        // fs.writeFile('/result/post.json', 'abc', function (err,data) {
        //     if (err) {
        //       return console.log(err);
        //     }
        //     console.log(data);
        //   });
        
        //console.log(response)
        //return response
    } catch (error) {
        console.log(error)   
    }
   
    

}

fetchData()

// const stringData = JSON.stringify(response)
        
// fs.writeFile(path.join(__dirname, '/result', 'post.json'), stringData, (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('File Written to....')
// })


// Create and write to file

// const dev1 = {
//     job: {
//         title: 'Frontend'
//     }
// }


// const dev2 = { ...dev1 }

// dev2.job.title = 'Backend'
// dev1.job.title = 'Fullstack'

// console.log(dev1.job.title)
// console.log(dev2.job.title)