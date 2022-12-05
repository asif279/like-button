import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { useState } from 'react';
import './App.css';

function App() {
  const [like,setLike]=useState('');
   const handleLike=()=>{
    
   
   }
  return (
    <div className="">
      <ThumbUpRoundedIcon onClick={()=>setLike(like ? '':"primary")} color={like}></ThumbUpRoundedIcon>
      
    </div>
  );
}

export default App;
