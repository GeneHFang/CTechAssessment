import React, {useState} from 'react';
import './App.css';
import CarouselContainer from './components/CarouselContainer';
import mountain from './assets/mountain.png';
import blue from './assets/blue.jpg';

function App() {

  const [navigate, setNavigate] = useState(0);
  const [select, setSelect] = useState(1);

  return (
    <div className="App" >
    <img src={blue} width='100%' height='100%' style={{position:"absolute", marginLeft:'-50%', zIndex:-1}}/>
    <img src={mountain} style={{position:'absolute', height:'100%', zIndex:-1}}/>
    <img src={mountain} style={{position:'absolute', height:'100%', marginLeft:'-100%', zIndex:-1}}/>
      <div style={{height:navigate!==2 ? '74px' : '180px', display:'flex', paddingTop:'25px', justifyContent:'space-between', backgroundColor:navigate!==0 ? "white" : null}}>
        <div style={{marginLeft:'25%'}}>
          <button className={navigate===0 ? "button" : "button-dark"} onClick={()=>setNavigate(0)}>LOGO</button>
          {navigate === 2 ? 
            <p>02. CLIMB</p>
            :
              navigate === 1 
                ? 
                <p style={{position:"absolute", marginTop:'-50px', marginLeft:'50px'}}>
                  <p className="title-small">LOSANGELES</p>
                  <p className="title-small" style={{color:'rgba(65,79,107,1)'}} >MOUNTAINS</p>
                </p>
                :
                null
          }
        </div>
          {navigate !== 2 ? 
            <div style={{marginRight:'25%'}}>
              <button className={navigate===0 ? "button" : "button-dark"} onClick={()=>setNavigate(1)}>01. HISTORY</button> 
              <button className={navigate===0 ? "button" : "button-dark"} onClick={()=>setNavigate(2)}>02. TEAM</button>
            </div>
            :
          null
          }
      </div>
        {navigate===0 
          ? 
          <div style={{height:'634px'}}>
            <p className="title">LOSANGELES</p>
            <p className="title" style={{color:'rgba(65,79,107,1)'}} >MOUNTAINS</p>
          </div>
          :
          <div style={{height:'634px'}}>
          {navigate === 1 ? 
            <p>01. HISTORY</p>
            : 
            <div style={{position:"absolute", backgroundColor:'rgba(65,79,107,1)', height:'40px', width:'100%', marginTop:'-25px'}}> 
            <p style={{marginLeft:'-35%', marginTop:'0'}}>
              <button className={select === 1 ? "climb-button-selected" : "climb-button-unselected"} onClick={()=>setSelect(1)}>MOUNTAIN 1</button> 
              <button className={select === 2 ? "climb-button-selected" : "climb-button-unselected"} onClick={()=>setSelect(2)}>MOUNTAIN 2</button>
            </p>
            </div>
            }
          { navigate === 2 ? 
            <div className="schedule-box">
            <h1>SCHEDULE {select === 1 ? "1" : "2"}</h1>
            {
              select === 1 
              ? "STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 STUFF FOR SCHEDULE 1 "
              : "STUFF FOR SCHEDULE 2 STUFF FOR SCHEDULE 2 STUFF FOR SCHEDULE 2 "
              
            }
          </div>
          : null }
          </div>
        }
      {navigate === 1 ? 
      <div style={{marginTop:"-100px",paddingLeft:'345px',paddingRight:'345px', zIndex:3}}>
        <CarouselContainer />
      </div>
      : null  
      }
      {navigate === 2 ? 
        <div style={{position:'absolute', height:'72px', width:'100%', marginTop:'0', backgroundColor:'rgba(65,79,107,1)', zIndex:1}} >
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>   
              <button className="button-footer" onClick={()=>setNavigate(0)}>LOGO</button>
              <div><p className="footer-text-p">LOSANGELES</p>
              <p className="footer-text-p">MOUNTAINS</p></div>
            </div>
            <p className="footer-text" >COPYRIGHT 2016</p>
          </div>
        </div>

      : null 
      }
    </div>
  );
}

export default App;
