require('dotenv').config()
const express = require('express')

const app = express()


const githubData = {
    "login": "Akash-Rai-27",
    "id": 86732163,
    "node_id": "MDQ6VXNlcjg2NzMyMTYz",
    "avatar_url": "https://avatars.githubusercontent.com/u/86732163?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Akash-Rai-27",
    "html_url": "https://github.com/Akash-Rai-27",
    "followers_url": "https://api.github.com/users/Akash-Rai-27/followers",
    "following_url": "https://api.github.com/users/Akash-Rai-27/following{/other_user}",
    "gists_url": "https://api.github.com/users/Akash-Rai-27/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Akash-Rai-27/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Akash-Rai-27/subscriptions",
    "organizations_url": "https://api.github.com/users/Akash-Rai-27/orgs",
    "repos_url": "https://api.github.com/users/Akash-Rai-27/repos",
    "events_url": "https://api.github.com/users/Akash-Rai-27/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Akash-Rai-27/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2021-06-30T15:07:41Z",
    "updated_at": "2024-03-08T14:01:00Z"
  }



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('batman here')
})

app.get('/login',(req,res)=>{
    res.send('<h1> Login into batcave </h1>')
})

app.get('/batcave',(req,res)=>{
    res.send('<h2> You are now inside batcave </h2>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port : active`)
})