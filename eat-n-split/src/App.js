import {useState} from 'react'

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends)
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)

  // Handler functions to manage the state of the app
  function handleShowAddFriend() {
    return setShowAddFriend((show)=> !show)
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    // hide the form after adding a friend
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curSelectedFriend) => 
      curSelectedFriend?.id === friend.id ? null : friend);
      setShowAddFriend(false);
  }

  function handleSplitBill(value){
    // console.log(value);

    setFriends((friends) => friends.map(
      (friend) => friend.id === selectedFriend.id 
      ? {...friend, balance: friend.balance + value } 
      : friend
    ))
    
    // close the form after splitting the bill
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      {/* <h1>Eat-n-Split</h1> */}
      <div className="sidebar">
        <FriendsList 
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriend}/>}
        
        <Button onClick={handleShowAddFriend}> 
          {showAddFriend ? "close" : "Add friend"}
          {/* {console.log(showAddFriend)} */}
        </Button>

      </div>

      {selectedFriend && <FormSplitBill 
        selectedFriend={selectedFriend}
        onSplitBill={handleSplitBill}/>
      }
    </div>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => 
        <Friend friend={friend} key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
        )}
    </ul>
  )
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected":""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}.
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You and your {friend.name} are even.
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close":"Select"}
      </Button>
    </li>
  )
}

function FormAddFriend({ onAddFriends }){
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48')

  function handleSubmit(e) {
    e.preventDefault();

    // Guard Clause
    if (!name || !image) return;

    const id = crypto.randomUUID()
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriends(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend Name</label>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}/>

      <label>📷 Image URL</label>
      <input 
        type="text" 
        value={image}
        onChange={(e)=> setImage(e.target.value)}
        />

      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ selectedFriend, onSplitBill }){
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    // Guard Clause
    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend :
    -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name} </h2>

      <label>💵 Bill value</label>
      <input type="text" 
        value={bill} 
        onChange={(e) => setBill(Number(e.target.value))}
        />

      <label>👨 Your expense</label>
      <input type="text" 
        value={paidByUser}
        onChange={(e) => setPaidByUser(
          Number(e.target.value) > bill ? paidByUser :
          Number(e.target.value)
          )}
      />

      <label>👭 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}/>

      <label>Who is paying for the bill?</label>
      <select value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option>Me</option>
        <option>{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
