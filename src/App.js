import TopButton from './components/TopButton';
import Friend from './components/Friend';
import {
  faUserFriends,
  faUserShield,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="fixed left-0 bg-slateDark h-screen flex flex-col w-64">
      <input
        className="bg-black m-2 rounded text-sm p-1 font-semibold placeholder-gray-500 hover:cursor-pointer"
        placeholder="Find or start a conversation"
      />
      <hr className=" border-black" />
      <TopButton title="Friends" icon={faUserFriends} />
      <TopButton title="Nitrous" icon={faUserShield} />
      <p className="m-2 text-lightGray">Friends</p>
      <div className="flex flex-col">
        <Friend image={faUserCircle} name="Jeff" />
        <Friend image={faUserCircle} name="Joe" />
        <Friend image={faUserCircle} name="John" />
      </div>
    </div>
  );
}

export default App;
