import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import Draggable from 'react-draggable';



export const HomeView = () => (
  <div>  
  	<WrapperContent/>    
  </div>
)


class WrapperContent extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
      	x:'',y:'',
         data : 0,
         coords : {
         	one: {x:12, y :12},
	        two: {x:12, y :12},
	        three: {x:12, y :12},
	        four: {x:12, y :12}
         }
      }   

      this._onMouseMove = this._onMouseMove.bind(this);
  
   }
	
   render() {
      return (        
         <div className="row" onMouseMove={this._onMouseMove}>
			 	<div className="col-xs-6 col-md-3">
			 		<div>
			 			current mouse axis -<b>X:{this.state.x} &nbsp; &nbsp;Y:{this.state.y}</b>
			 		</div>
			 		<div><br/></div>
			 		<SideNav />

			 	</div>
		  		<div className="col-xs-6 col-md-9"> 
		  			<MainContent/>
		  		</div>
		  </div>
      );
   }

    _onMouseMove(e) {	    
	    this.state.x = e.screenX;
	    this.state.y = e.screenY;
	    console.log(e.screenX+"||"+e.screenY)
	    this.setState({x: e.screenX,y:e.screenY});
	  }
}


class SideNav extends React.Component {
	   constructor() {
      super();
		
      this.state = {
         ax: '',
         ay:'',
         bx: '',
         by:'',
         cx: '',
         cy:'',
         dx: '',
         dy:''

      }
	      this.handleStartA = this.handleStartA.bind(this);
	      this.handleStopA = this.handleStopA.bind(this);
	      this.handleStartB = this.handleStartB.bind(this);
	      this.handleStopB = this.handleStopB.bind(this);
	      this.handleStartC = this.handleStartC.bind(this);
	      this.handleStopC = this.handleStopC.bind(this);
	      this.handleStartD = this.handleStartD.bind(this);
	      this.handleStopD = this.handleStopD.bind(this);

      
   };
   render() {
      return (      	
         <div>
            <div><b>1.</b> 3 X 7  || currentX:{this.state.ax} - currentY:{this.state.ay}</div>
            <Draggable onStart={this.handleStartA}        				
        			   onStop={this.handleStartA}>
			  <div className={classes.dragitem}>
				 1
			  </div>			  
			</Draggable>
			<br/><br/>

			<div><b>2.</b> 7 X 4 || currentX:{this.state.bx} - currentY:{this.state.by}</div>
			<Draggable onStart={this.handleStartB}        				
        			   onStop={this.handleStartB}>
			  <div className={classes.dragitem}>2</div>
			</Draggable>
			<br/><br/>

			<div><b>3.</b> 4 X 5 || currentX:{this.state.cx} - currentY:{this.state.cy}</div>
			<Draggable onStart={this.handleStartC}        				
        			   onStop={this.handleStartC}>
			  <div className={classes.dragitem}>3</div>
			</Draggable>
			<br/><br/>

			<div><b>4.</b> 2 X 7 || currentX:{this.state.dx} - currentY:{this.state.dy}</div>
			<Draggable onStart={this.handleStartD}        				
        			   onStop={this.handleStartD}>
			  <div className={classes.dragitem}>4</div>
			</Draggable>
         </div>
      );
   }

    handleStartA(e,d) {
    	this.state.ax=e.screenX;
    	this.state.ay=e.screenY;
    	this.setState({ax: e.screenX,ay:e.screenY});
        console.log("handleStart",e);
        console.log("handleStart",this.state);
    }

    handleStopA(e) {
    	this.state.ax=e.screenX;
    	this.state.ay=e.screenY;    	
    	this.setState({ax: e.screenX,ay:e.screenY});
    	console.log("handleStop",e);
    }

    handleStartB(e,d) {
    	this.state.bx=e.screenX;
    	this.state.by=e.screenY;
    	this.setState({bx: e.screenX,by:e.screenY});
        console.log("handleStart",e);
    }

    handleStopB(e) {
    	this.state.bx=e.screenX;
    	this.state.by=e.screenY;
    	this.setState({bx: e.screenX,by:e.screenY});
    	console.log("handleStop",e);
    }

    handleStartC(e,d) {
    	this.state.cx=e.screenX;
    	this.state.cy=e.screenY;
    	this.setState({cx: e.screenX,cy:e.screenY});
        console.log("handleStart",e);
    }

    handleStopC(e) {
    	this.state.cx=e.screenX;
    	this.state.cy=e.screenY;
    	this.setState({cx: e.screenX,cy:e.screenY});
    	console.log("handleStop",e);
    }

    handleStartD(e,d) {
    	this.state.dx=e.screenX;
    	this.state.dy=e.screenY;
    	this.setState({dx: e.screenX,dy:e.screenY});
        console.log("handleStart",e);
    }

    handleStopD(e) {
    	this.state.dx=e.screenX;
    	this.state.dy=e.screenY;
    	this.setState({dx: e.screenX,dy:e.screenY});
    	console.log("handleStop",e);
    }
}

class MainContent extends React.Component {
   render() {
   	var names = ['', '', '', '','', '','', '','', '',''];
      return (
         <div>
            <table>
            <tbody>
            	{names.map(function(name, index){
                    return <tr key={ index }>
	                    	<td className="first">{ -(index - names.length)}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                		   </tr>;
                  })}
            	<tr>
            		<td>0</td>
            		<td>1</td>
            		<td>2</td>
            		<td>3</td>
            		<td>4</td>
            		<td>5</td>
            		<td>6</td>
            		<td>7</td>
            		<td>8</td>
            		<td>9</td>
            		<td>10</td>
            	</tr>
            	</tbody>
            </table>
            <br/>           
            <button type="button" className="btn btn-primary" onClick={this.checkData}>Check</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-primary" onClick={this.resetData}>Reset</button>
         </div>
      );
   }

   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.resetData = this.resetData.bind(this);
   };

   
   	checkData() {
		console.log("checkData DATA");
   	}

   	resetData() {
		this.setState({});
		console.log("RESET DATA");
   	}

}

export default HomeView


