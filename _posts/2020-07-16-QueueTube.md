---
layout: default
title:  "QueueTube Development"
permalink: /blog/QueueTube
---

# QueueTube
Essentially a hugh 'watch later playlist' with time stamp saving and channel prioritization. 

# Development blog
It uses <a href="https://developers.google.com/identity/protocols/oauth2">Google OAuth2</a> to securely access your subscribed channels,
using this information and the <a href="https://developers.google.com/youtube/v3">YouTube API</a>, a database of videos to watch is built for each user.
The data is stored in a NoSQL database on Google's <a href="https://firebase.google.com/docs/firestore">Cloud Firestore</a>.
The app is hosted on <a href="https://www.heroku.com/">Heroku</a> Free Tier. 

## Completed
1. Google OAuth 2.0 integration (15-07-20)
2. API call to get ALL channels in subscription (20-07-20)
3. Firestore (firebase database) integration complete (23-07-20)
4. User model complete (28-07-20)
5. Home page logic (06-08-20)
6. Dynamic grid based page (15-08-20)
7. Delete videos feature (18-08-20)
8. Refresh feed feature (27-08-20)
9. Upload prototype to Heroku for personal use (30-08-20)

## To-Do
1. Create demo account
2. Add feature to prioritize channels