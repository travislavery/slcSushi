# slcSushi
For those who prefer their lunch suggestions in JSON. 

1. Clone the repo
2. run `npm install`
3. create a .env file and add your yelp fusion API key (https://fusion.yelp.com/) under a variable named YELP_KEY='your-key-here'
4. `npm run start`. Access on http://localhost:3000/. 

Search using the URL: 
http://localhost:3000/lunch/location or http://localhost:3000/lunch/location/category.

For example, to get recommendations for sushi in Salt Lake City:
http://localhost:3000/SLC/sushi or http://localhost:3000/84101/sushi
