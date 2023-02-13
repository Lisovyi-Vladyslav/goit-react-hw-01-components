import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from 'user.json';
import data from 'data.json';
import friends from "friends.json";
import transactions from "transactions.json";


export const App = () => {
  return (
    <>
    <Profile
     user={user}>
    </Profile>
      <Statistics
        statistics={data}>
      </Statistics>
      <FriendList
        friends={friends}>
      </FriendList>
      <TransactionHistory items={transactions} />;
  </>
  );
};
