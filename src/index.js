import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import user from 'components/SocialProfile/user.json';
import data from 'components/Statistics/statistic-data.json';
import friendsData from 'components/FriendList/friends.json';
import transactionData from 'components/TransactionsHistory/transactions.json';

import { Main } from 'components/globalStyles.styled';
import { Profile } from 'components/SocialProfile/social-profile';
import { Statistic } from 'components/Statistics/statistics';
import { FriendList } from 'components/FriendList/friends-list';
import { TransactionHistory } from 'components/TransactionsHistory/transactions-history';

const refs = {
  root: document.querySelector('#root'),
  btnHwt1El: document.querySelector('#hwt1'),
  btnHwt2El: document.querySelector('#hwt2'),
  btnHwt3El: document.querySelector('#hwt3'),
  btnHwt4El: document.querySelector('#hwt4'),

};

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
function onbtnHwt1 () {
  ReactDOM.render(
  <Main>
    <Profile 
        userAvatar={user.avatar} 
        userName={user.username} 
        userTag={user.tag} 
        userLocation={user.location} 
        userFollowers={user.stats.followers} 
        userViews={user.stats.views} 
        userLikes={user.stats.likes}
      />
  </Main>, refs.root);
};

refs.btnHwt1El.addEventListener('click', onbtnHwt1);


///// 2 ////////
function onbtnHwt2 () {
  ReactDOM.render(
  <Main>
    <Statistic statsData={data}/>
  </Main>, refs.root);
};

refs.btnHwt2El.addEventListener('click', onbtnHwt2);



///// 3 ////////
function onbtnHwt3 () {
  ReactDOM.render(
  <Main>
    <FriendList friends={friendsData}/>
  </Main>, refs.root);
};

refs.btnHwt3El.addEventListener('click', onbtnHwt3);

///// 4 ////////
function onbtnHwt4 () {
  ReactDOM.render(<TransactionHistory
    items={transactionData}
  />, refs.root);
};

refs.btnHwt4El.addEventListener('click', onbtnHwt4);