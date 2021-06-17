import logo from './logo.svg';
import './App.css';
const CLIENT_ID = "9ebc8fa0a83047fa84b8539784c5b7ec"
const CLIENT_SECRET = "6d0ee93c1c5c415a8134c7785fd4a7f9"
let starShineSongs = [
{songName: "superNova", pic:"<image src = https://www.sciencenews.org/wp-content/uploads/2020/04/041520_mt_supernova_feat.jpg >", demoURL :"tosong" }, 
{songName: "fireFly", pic:"<image src = https://thegothamrogue.files.wordpress.com/2013/01/firefly.png>", demoURL : "tosong" }, 
{songName: "liftUp", pic:"<image>", demoURL :"tosong" }
];

let playList1 = {name: "starshine", pic:"<img>", songList: starShineSongs }

let carFunkSongs = [
{songName: "BabyLove", pic:"<image>", demoURL :"tosong" }, 
{songName: "sweatMe", pic:"<image>", demoURL : "tosong" }, 
{songName: "loveBlues", pic:"<image>", demoURL :"tosong" }
];

let playList2 = {name: "carFunk", pic:"<img>", songList: carFunkSongs }

let bootyBopSongs = [
{songName: "baby Girl", pic:"<image>", demoURL :"tosong" }, 
{songName: "Lose me", pic:"<image>", demoURL : "tosong" }, 
{songName: "raga muffin", pic:"<image>", demoURL :"tosong" }
];
//playlist 3
let playList3 = {name: "bootyBop", pic:"<img>", songList: bootyBopSongs }
const fakeData = [playList1,
playList2, playList3]
function App() {
  return (
    <div></div>
  );
}

export default App;
