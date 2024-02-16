
import  userData  from "../src/userData.json";
import './App.css';
import {Profile} from './components/Profile/Profile';
import friends from "./friends.json";
import  {FriendList}  from "./components/friends/FriendList";
import transactions from "../src/transactions.json";
import { TransactionHistory } from "./components/transaction/TransactionHistory";


function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}

export default App
