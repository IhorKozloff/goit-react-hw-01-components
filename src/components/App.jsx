import user from 'components/SocialProfile/user.json';
import data from 'components/Statistics/statistic-data.json';
import friendsData from 'components/FriendList/friends.json';
import transactionData from 'components/TransactionsHistory/transactions.json';

import { Profile } from 'components/SocialProfile/social-profile';
import { Statistic } from 'components/Statistics/statistics';
import { FriendList } from 'components/FriendList/friends-list';
import { TransactionHistory } from 'components/TransactionsHistory/transactions-history';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      
      }}
    >
      <Profile 
          userAvatar={user.avatar} 
          userName={user.username} 
          userTag={user.tag} 
          userLocation={user.location} 
          userFollowers={user.stats.followers} 
          userViews={user.stats.views} 
          userLikes={user.stats.likes}
        />
        <Statistic statsData={data}/>
        <FriendList friends={friendsData}/>
        <TransactionHistory items={transactionData}/>
    </div>
  );
};
