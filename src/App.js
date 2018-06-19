import React from 'react';
import './index.css';

class Square extends React.Component {
  render() {
    return (
    
      <div className="btn btn-primary square" onClick={() => {this.props.onClick()}}>
        {(this.props.value==='')?' ': this.props.value}
      </div>
    
    );
  }
}

const getBoardArray = () => {
  let cont = Array(81).fill('');
    let cnt = 0;
    cont = cont.map(x=>(Math.random()>.78)?'X':'');
    cont.forEach(function(obj,i){
      if(obj===''){
        cnt=0;
        if(cont[i+1]==='X'){
          cnt ++;
        }
        if(cont[i+8]==='X'){
          cnt ++;
        }
        
        if(cont[i+9]==='X'){
          cnt ++;
        }
        if(cont[i+10]==='X'){
          cnt ++;
        }


        if(cont[i-10]==='X'){
          cnt ++;
        }
        if(cont[i-9]==='X'){
          cnt ++;
        }
        if(cont[i-8]==='X'){
          cnt ++;
        }

        if(cont[i-1]==='X'){
          cnt ++;
        }

        //if(cnt>0){
          cont[i] = cnt.toString();
        //}        
      }
    });
    return cont;
}
class Board extends React.Component {
  constructor(props) {
    super(props);
//    let rndBox = getRndBox(9,9,0);
    
    
    const b = getBoardArray();
  
    this.state = {
      highscore: 0,
      score: 0,
      viewstate:'start',
      contents: b,
      squares: Array(81).fill(''),  
     
    };}
    handleClick(i) {
      
      const contents = this.state.contents.slice();
      const squares = this.state.squares.slice();
      if(this.state.viewstate==="gameover"){
        let screh=this.state.highscore;
        if(this.state.highscore<=this.state.score){
          screh = this.state.score;
        }
        
      
        this.setState({highscore:screh, viewstate:"gameover2"});
      }
      if(this.state.viewstate==="gameover2"){
        
         this.setState({
       
            squares: Array(81).fill(''),
            viewstate:"start"
          });
      }
      if(this.state.viewstate==="start"){
        const b = getBoardArray();
        
        
        this.setState({ 
                        score: 0,
                        contents: b,
                        viewstate:"gameon"});        
      }
      if(this.state.viewstate==="gameon"){
      
        if(this.state.contents[i] === 'X'){
          squares[i] = 'X';
          return this.setState({squares:squares, viewstate:"gameover"});        
        }            
        if(squares[i]!==contents[i]){
          if (contents[i] !== ''){
            squares[i] = contents[i];
            if(squares[i]!=='X'){
              let scre = this.state.score;
              scre++;
              this.setState({score:scre, squares: squares})
            }
            }
        }
              
      // this.setState({});
    }}
      
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />
    );  
    //return <Square value={this.state.squares[i]} myId={i}/>;
  }

  render() {
    let hiscre = 'High Score: '+ this.state.highscore;
    let status = "Can you beat the high score?";
    let clickit = 'Click a button below to start!'
    switch(this.state.viewstate){
      case "start":
      
      
      break;
      case "gameon":
      status = 'Your Score: ' + this.state.score.toString() + '';
      clickit = "Numbers represent adjacent mines"; 
      break;
      case "gameover":
      status = 'Game Over Your Score was: ' + this.state.score.toString() + '!';
      clickit = " Click a button to continue...";
      break;
      case "gameover2":
      status = 'Game Over Your Score was: ' + this.state.score.toString() + '!';
      clickit = " Click a button to continue...";
      break;
      default:
      status = 'Press a button to start!'
      break;
    
    }
    let contstyle = {};
    if(this.state.viewstate!=="gameon"&&this.state.viewstate!=="start"){
      contstyle = {backgroundImage: 'url("https://i.giphy.com/media/oe33xf3B50fsc/giphy.webp")', 
      'max-width': '15%',
    
      backgroundRepeat: 'no-repeat',    
      backgroundPosition: 'contain',
      'background-size':  '48% 120%',
     
      'min-width': '760px',
      'margin' : 'auto',
  
    }
    }else{
      contstyle = {backgroundImage: 'url("https://i.giphy.com/media/WWYSFIZo4fsLC/giphy.webp")', 
      'max-width': '15%',
    
      backgroundRepeat: 'no-repeat',    
      backgroundPosition: 'contain',
      'background-size':  '48% 120%',
     
      'min-width': '760px',
      'margin' : 'auto',
    

       
    }
  }    
    return (
      
      <div className="container maincont" style={contstyle}>
      
        <div className="row">
          <div className="col-12">
            {hiscre}<br/>
            {status}<br/>
            {clickit}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>  
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}        
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
        
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
        
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(27)}
          {this.renderSquare(28)}
          {this.renderSquare(29)}
        
          {this.renderSquare(30)}
          {this.renderSquare(31)}
          {this.renderSquare(32)}
        
          {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(36)}
          {this.renderSquare(37)}
          {this.renderSquare(38)}
        
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
        
          {this.renderSquare(42)}
          {this.renderSquare(43)}
          {this.renderSquare(44)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(45)}
          {this.renderSquare(46)}
          {this.renderSquare(47)}
        
          {this.renderSquare(48)}
          {this.renderSquare(49)}
          {this.renderSquare(50)}
        
          {this.renderSquare(51)}
          {this.renderSquare(52)}
          {this.renderSquare(53)}
          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(54)}
          {this.renderSquare(55)}
          {this.renderSquare(56)}
          
          {this.renderSquare(57)}
          {this.renderSquare(58)}
          {this.renderSquare(59)}
          
          {this.renderSquare(60)}
          {this.renderSquare(61)}
          {this.renderSquare(62)}
          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(63)}
          {this.renderSquare(64)}
          {this.renderSquare(65)}
          
          {this.renderSquare(66)}
          {this.renderSquare(67)}
          {this.renderSquare(68)}
          
          {this.renderSquare(69)}
          {this.renderSquare(70)}
          {this.renderSquare(71)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquare(72)}
          {this.renderSquare(73)}
          {this.renderSquare(74)}
          
          {this.renderSquare(75)}
          {this.renderSquare(76)}
          {this.renderSquare(77)}
          
          {this.renderSquare(78)}
          {this.renderSquare(79)}
          {this.renderSquare(80)}
          
          </div>
      

        </div>
        
        
      </div>
    
      
    );
  }
}

class App extends React.Component {
  render() {
    return (
      
          <Board />
      
    );
  }
}

export default App;
// ========================================

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );