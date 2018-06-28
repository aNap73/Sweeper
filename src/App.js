import React from 'react';
import './index.css';

const cheatOn = {cheat:'yes'}
const nMod = 81;
// const nMod = 256;
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
    cont.forEach(function(obj,q){
      if(obj===''){
        cnt=0;
        let i = 0;
        i=q+1; //R 
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+8; //RD
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+9; //RD
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+10; //RD
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+nMod-1; //D 
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+nMod-8; //LD 
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+nMod-9; //L 
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }
        i=q+nMod-10; //UL 
        if(cont[(i)%nMod]==='X'){
          cnt ++;
        }

        //if(cnt>0){
        cont[q] = cnt.toString();
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
        
        
        this.setState({ score: 0,
                        contents: b,
                        viewstate:"gameon"});        
      }
      if(this.state.viewstate==="gameon"){
        
        if(cheatOn.cheat==='yes'){
          let o = 0;
          for(;o<81;o++){
            squares[o] = contents[o];
            
            
          }
          this.setState({squares: squares});
          return cheatOn.cheat='no';
        }

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
  renderSquareRow(startIndex){
    let i = startIndex;
    let rdr = [];
    
    for(;i<startIndex+9; i++){
      
      rdr.push(this.renderSquare(i));
      
    }
    
    return rdr;
  }
  renderSquare(i) {
    return (
      <Square
        key={i}
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
      
      backgroundRepeat: 'no-repeat',    
      backgroundPosition: 'contain',
      'backgroundSize':  '100% 100%',
      
      
  
    }
    }else{
      
    contstyle = {backgroundImage: 'url("https://i.giphy.com/media/WWYSFIZo4fsLC/giphy.webp")', 
      
    
      backgroundRepeat: 'no-repeat',    
      backgroundPosition: 'contain',
      'backgroundSize':  '100% 150%',
     

       
    } 
     
  } 
    
    return (
      <div className="container iJustCont">
      <div className="container-fluid maincont" style={contstyle}>      
        <div className="row">
          <div className="col-12">
            {hiscre}<br/>
            {status}<br/>
            {clickit}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(0)}
          
        </div>  
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(9)}                    
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(18)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(27)}
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(36)}
          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(45)}
          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(54)}
          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(63)}          
          </div>
        </div>
        <div className="row">
        <div className="col-12">
          {this.renderSquareRow(72)}
        </div>
        </div>
        <div className="row">
          <div className="col-12">
            Coming SOON Old Schools Free Games... 
          </div>
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