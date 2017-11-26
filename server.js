const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const axios = require('axios')

const server = express()
server.use(cors())
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

var app = server.listen(3001, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3001')
})

server.get('/', function(req, res) {
    res.send('Just a blank page')
})
server.get('/namelist/morning', async function(req, res) {
    const morningList = []
    const type = ['PG','MK','DS','CT']
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });

    for(i=0;i<list.length;i++){
        switch(list[i].interviewRef.substr(0,2)){
            case type[0] :
                if(Number(list[i].interviewRef.substr(2)) >=1 && Number(list[i].interviewRef.substr(2))<=23){
                    morningList.push(list[i])
                }
                break;
            case type[1] :
                if(Number(list[i].interviewRef.substr(2)) >=1 && Number(list[i].interviewRef.substr(2))<=18){
                    morningList.push(list[i])
                }
                break;
            case type[2] :
                if(Number(list[i].interviewRef.substr(2)) >=1 && Number(list[i].interviewRef.substr(2))<=20){
                    morningList.push(list[i])
                }
                break;
            case type[3] :
                if(Number(list[i].interviewRef.substr(2)) >=1 && Number(list[i].interviewRef.substr(2))<=25){
                    morningList.push(list[i])
                }
                break;
        }
    }
    console.log(morningList.length)
    res.send(morningList)
})
server.get('/namelist/morning/:program',async function(req,res){
    const input = req.params.program
    const data = []
    console.log(input)
    let list = await axios({
        method: 'get',
        url: 'http://localhost:3001/namelist/morning'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        console.log(`${input}`+i)
        console.log(list[i].interviewRef.substr(0,2).toLowerCase())
        if(list[i].interviewRef.substr(0,2).toLowerCase() == `${input}`){
            data.push(list[i])
        }
    }
    res.send(data)

})
server.get('/namelist/afternoon', async function(req, res) {
    const afternoonList = []
    const type = ['PG','MK','DS','CT']
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });

    for(i=0;i<list.length;i++){
        switch(list[i].interviewRef.substr(0,2)){
            case type[0] :
                if(Number(list[i].interviewRef.substr(2)) >=24 && Number(list[i].interviewRef.substr(2))<=63){
                    afternoonList.push(list[i])
                }
                break;
            case type[1] :
                if(Number(list[i].interviewRef.substr(2)) >=19 && Number(list[i].interviewRef.substr(2))<=50){
                    afternoonList.push(list[i])
                }
                break;
            case type[2] :
                if(Number(list[i].interviewRef.substr(2)) >=21 && Number(list[i].interviewRef.substr(2))<=51){
                    afternoonList.push(list[i])
                }
                break;
            case type[3] :
                if(Number(list[i].interviewRef.substr(2)) >=26 && Number(list[i].interviewRef.substr(2))<=56){
                    afternoonList.push(list[i])
                }
                break;
        }
    }
    console.log(afternoonList.length)
    res.send(afternoonList)
})
server.get('/namelist/afternoon/:program',async function(req,res){
    const input = req.params.program
    const data = []
    console.log(input)
    let list = await axios({
        method: 'get',
        url: 'http://localhost:3001/namelist/afternoon'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        console.log(`${input}`+i)
        console.log(list[i].interviewRef.substr(0,2).toLowerCase())
        if(list[i].interviewRef.substr(0,2).toLowerCase() == `${input}`){
            data.push(list[i])
        }
    }
    res.send(data)

})
server.get('/namelist/programming',async function(req, res) {
    const programmingList = []
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        if(list[i].interviewRef.substr(0,2) == 'PG'){
            programmingList.push(list[i])
        }
    }
    res.send(programmingList)
})
server.get('/namelist/design',async function(req, res) {
    const designList = []
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        if(list[i].interviewRef.substr(0,2) == 'DS'){
            designList.push(list[i])
        }
    }
    res.send(designList)
})
server.get('/namelist/marketing',async function(req, res) {
    const marketingList = []
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        if(list[i].interviewRef.substr(0,2) == 'MK'){
            marketingList.push(list[i])
        }
    }
    res.send(marketingList)
})
server.get('/namelist/content',async function(req, res) {
    const contentList = []
    let list = await axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
          return response.data
    });
    for(i=0;i<list.length;i++){
        if(list[i].interviewRef.substr(0,2) == 'CT'){
            contentList.push(list[i])
        }
    }
    res.send(contentList)
})

module.exports = server