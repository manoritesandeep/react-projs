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

  function handleShowAddFriend() {
    return setShowAddFriend((show)=> !show)
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    // hide the form after adding a friend
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      {/* <h1>Eat-n-Split</h1> */}
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriends={handleAddFriend}/>}
        <Button onClick={handleShowAddFriend}> 
          {showAddFriend ? "close" : "Add friend"}
          {/* {console.log(showAddFriend)} */}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>{children}</button>
  )
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => 
        <Friend friend={friend} key={friend.id}/>
        )}
    </ul>
  )
}

function Friend({ friend }) {
  return (
    <li>
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

      <Button>Select</Button>
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

function FormSplitBill(){
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X </h2>

      <label>💵 Bill value</label>
      <input type="text" />

      <label>👨 Your expense</label>
      <input type="text" />

      <label>👭 X's expense</label>
      <input type="text" disabled/>

      <label>Who is paying for the bill?</label>
      <select>
        <option>Me</option>
        <option>X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}
