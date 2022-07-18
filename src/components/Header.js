import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
      <div>
        <ul>
          <Link to="/"><li>News</li></Link>
          <Link to="/standings"><li>Standings</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header;