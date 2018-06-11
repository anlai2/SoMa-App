# SoMa
<h3 align="center">
  SoMa
</h3>

<p align="center">
  Sell your stuff safely!
</p>

### [Demo - Try it on Expo](https://expo.io/@anlai2/SoMaApp)

## Features

- Users can post sell/buy posts to sell their junk with profile ratings, transaction location, and SafeTrek API integration.

- With SafeTrek, users will have a peace of mind while making transactions with strangers, having emergency responses with a 
push of a button.

- SoMa also allows users to purchase items online safely with certified SafeTrek user profiles.

### Screenshots

<div style={{display: flex; flex-direction: row}}>
  <img src="screenshots/ss1.png" width="270" />
  <img src="screenshots/ss2.png" width="270" />
</div>

More screenshots to come!

## TODO

Many issues that will occur will be opened on this github page, below are milestones/enhancements

- [ ] Redesign app for better design and functionality
  - [ ] Decide which features to keep and not keep 
  - [ ] Profiles or Anonymity
  - [ ] Buy/Sell or only Buy 
  - [ ] Transaction Page Features
  - [ ] Display mockup here 
  
- [ ] Create a backend for easier web app integration
  - [ ] Implement REST API to store posts and profiles with MongoDB
  - [ ] Detach from firebase use
  - [ ] Handle SafeTrek auth when users sign up and login, each login should request a new access token
  
- [ ] RNRF to React-Navigation
  - Use createBottomTabNavigator to route through buy/sell pages

- [ ] API’s used
  * [SafeTrek API](https://docs.safetrek.io/reference#create-verification) to dispatch emergency response (Sandbox)
  * [Yelp API](https://www.yelp.com/developers/documentation/v3) for nearby safe places (malls, coffee shops, ...)

- [ ] Start building prototype
  - [ ] Get feedback
  - [ ] Prepare deployment to stores (Due by 08/27/18)

- [ ] Create a React Web App


## Feedback

Open an issue, make a PR, or send me an email at anlaics2@gmail.com
