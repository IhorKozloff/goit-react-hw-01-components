import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import user from 'components/data/user.json';
import data from 'components/data/statistic-data.json';
import friendsData from 'components/data/friends.json';
import { Profile } from 'components/social-profile';
import { Statistic } from 'components/statistics';
import { FriendList } from 'components/friends-list';

const root = document.querySelector('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//// 1 ///////
ReactDOM.render(<Profile 
  userAvatar={user.avatar} 
  userName={user.username} 
  userTag={user.tag} 
  userLocation={user.location} 
  userFollowers={user.stats.followers} 
  userViews={user.stats.views} 
  userLikes={user.stats.likes}
/>, root);


///// 2 ////////
ReactDOM.render(<Statistic
  statsData={data}
/>, root);

///// 3 ////////
ReactDOM.render(<FriendList
  friends={friendsData}
/>, root);