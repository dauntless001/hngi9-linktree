import './App.css';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReplyIcon from '@mui/icons-material/Reply';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CircleIcon from '@mui/icons-material/Circle';

const App = () => {
  const handleIcon = () => {
    return window.innerWidth <= 760 ? <MoreHorizIcon className='profile__share__icon'/> : <ReplyIcon className='profile__share__icon'/>
  }
  return (
    <div className='container'>
      <div className='profile__section'>
        <Avatar alt="Matanmi" src="data:image/jpeg;base64,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" 
        sx={{ width: 60, height: 60 }}
        className='profile__img'
        />
        <h3 id='twitter'>___waverider</h3>
        <h3 id='slack'>Dauntless</h3>
        <div className='profile__share'>
          {handleIcon()}
        </div>
      </div>
      <div className='link__section'>
        <a href="https://twitter.com/___waverider" id='btn__twitter'
        >Twitter Link</a>
        <a href="https://training.zuri.team/" id='btn__zuri'>
          Zuri Team
          </a>
        <a href="https://books.zuri.team/" id='books'>Zuri Books
        <br />
        <span className="link__subtext">Discover the best books on design and coding</span>
        </a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Oluwaseun%20Matanmi" id='book__python'>Python Books</a>
        <a href="https://background.zuri.team" id='pitch'>Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" id='book__design'>Design Books</a>
      </div>
      <div className='icon__section'>
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111615.png" style={{maxWidth : 22}} className="brand__icon" alt='slack'/>
        <GitHubIcon />
      </div>
      <hr className='footer__line'/>
      <div className='footer__section'>
        <div className='footer__zuri'>
          <h3>Zuri <CircleIcon sx={{width :10, height: 10, color:'red'}}/> Internship</h3>
        </div>
        <div>
          <p style={{color: '#cdcdcd', fontSize: 14, textAlign : 'center'}}>HNG Internship 9 Frontend Task</p>
        </div>
        <div className="footer__image">
          <img 
          src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1"
          alt="Ingressive" style={{maxWidth : 130}}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
