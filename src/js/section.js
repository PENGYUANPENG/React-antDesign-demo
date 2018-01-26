import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Icon, Button , Card} from 'antd';

export default  class Section extends React.Component  {
  render() {
    return (
		<div>
    	    <Row style={{height:'40px',margin:'40px auto'}}>
	    	    <Col span={17}></Col>
	    	    <Col span={3}><Button size='large'><Icon type="edit" />NEW CREATION</Button></Col>
	    	    <Col span={4}></Col>
    	    </Row>
    	    <Row style={{height:'410px',padding:'60px auto'}}>
	    	    <Col span={6}></Col>
	    	    <Col span={5}>
	    	    	<svg viewBox="0 0 300 300" id="progressContainer">
	    	    	<polyline points="149.99999999999997,25 149.99999999999997,87.5 " stroke="#e0e1e3" strokeWidth="7" style={{strokeDasharray:'4.5'}}></polyline>
	    	    	<path d="M 149.99999999999997 25 A 125 125 0 1 0 247.7289353085037 72.06377476765832" stroke="#e0e1e3" strokeWidth="7" fill="none" style={{strokeDasharray:'4.5'}}></path>
	    	    	<path d="M 247.7289353085037 72.06377476765832 A 125 125 0 0 0 247.7289353085037 72.06377476765832" stroke="#ffb300" strokeWidth="7" fill="none"></path>
	    	    	<image index="0" className="stepCircle unlocked" height="50" width="50" x="222.7289353085037" y="47.063774767658316" href="./images/dbg.svg"></image>
	    	    	<image index="0" className="stepCircle unlocked" height="25" width="25" x="235.7289353085037" y="60.063774767658316" href="./images/play.svg" cursor="pointer"  ></image>
	    	    	<image index="1" className="stepCircle" height="50" width="50" x="246.86598902272794" y="152.8151167445393" href="./images/star_disabled.svg"></image>
	    	    	<image index="2" className="stepCircle" height="50" width="50" x="179.23546738969478" y="237.62110848780242" href="./images/star_disabled.svg"></image>
	    	    	<image index="3" className="stepCircle" height="50" width="50" x="70.76453261030524" y="237.62110848780242" href="./images/star_disabled.svg"></image>
	    	    	<image index="4" className="stepCircle" height="50" width="50" x="3.134010977272041" y="152.81511674453932" href="./images/star_disabled.svg"></image>
	    	    	<image index="5" className="stepCircle" height="50" width="50" x="27.271064691496264" y="47.06377476765833" href="./images/star_disabled.svg"></image>
	    	    	<image index="6" className="stepCircle" height="50" width="50" x="124.99999999999997" y="0" href="./images/star_disabled.svg"></image>
	    	    	<image index="7" className="stepCircle" height="132" width="120" x="90" y="90" href="./images/street_artist_disabled.svg"></image>
	    	    	</svg>
		    	</Col>
		    	<Col span={2}></Col>
	    	    <Col span={6} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
	    	    	<h3>Street Artist</h3>
	    	    	<p>0 / 7</p>
	    	    	<p style={{margin:'32px 0 0px 0px'}}>Use code to create stunning street art! Make your own brushes, play with color - simple steps show you how</p>
	    	    	<Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
	    	    </Col>
	    	    <Col span={5}></Col>
    	    </Row>
    	    <Row style={{height:'410px',padding:'60px auto'}}>
    	    	<Col span={6}></Col>
    	    	<Col span={5}>
    	    	<svg viewBox="0 0 300 300" id="progressContainer">
					<polyline points="149.99999999999997,25 149.99999999999997,87.5 " stroke="#e0e1e3" strokeWidth="7" style={{strokeDasharray:'4.5'}}></polyline>
					<path d="M 149.99999999999997 25 A 125 125 0 1 0 258.25317547305485 212.5" stroke="#e0e1e3" strokeWidth="7" fill="none" style={{strokeDasharray:'4.5'}}></path>
					<path d="M 258.25317547305485 212.5 A 125 125 0 0 0 258.25317547305485 212.5" stroke="#ffb300" strokeWidth="7" fill="none"></path>
					<image index="0" className="stepCircle unlocked" height="50" width="50" x="233.25317547305485" y="187.49999999999997" href="./images/dbg.svg"></image>
					<image index="0" className="stepCircle unlocked" height="25" width="25" x="246.25317547305485" y="200.49999999999997"  href="./images/play.svg" cursor="pointer"></image>
					<image index="1" className="stepCircle" height="50" width="50" x="16.74682452694519" y="187.50000000000006" href="./images/star_disabled.svg"></image>
					<image index="2" className="stepCircle" height="50" width="50" x="124.99999999999997" y="0" href="./images/star_disabled.svg"></image>
					<image index="3" className="stepCircle" height="132" width="120" x="90" y="90" href="./images/data_designer_disabled.svg"></image>
				</svg>
				</Col>
				<Col span={2}></Col>
				<Col span={6} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
    	    	<h3>Knowledge is Power</h3>
    	    	<p>0 / 3</p>
    	    	<p style={{margin:'32px 0 0px 0px'}}>Learn to make a weather station, satellite tracker or map. Use real data from across the world to control code</p>
    	    	<Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
    	    </Col>
    	    <Col span={5}></Col>
    	    </Row>
    	    <Row style={{height:'410px',padding:'60px auto'}}>
    	    <Col span={6}></Col>
    	    <Col span={5}> 	
    	    	<svg viewBox="0 0 300 300" id="progressContainer">
				<polyline points="149.99999999999997,25 149.99999999999997,87.5 " stroke="#e0e1e3" strokeWidth="7" style={{strokeDasharray:'4.5'}}></polyline>
				<path d="M 149.99999999999997 25 A 125 125 0 1 0 268.8820645368942 111.37287570313157" stroke="#e0e1e3" strokeWidth="7" fill="none" style={{strokeDasharray:'4.5'}}></path>
				<path d="M 268.8820645368942 111.37287570313157 A 125 125 0 0 0 268.8820645368942 111.37287570313157" stroke="#ffb300" strokeWidth="7" fill="none"></path>
				<image index="0" className="stepCircle unlocked" height="50" width="50" x="243.88206453689418" y="86.37287570313157" href="./images/dbg.svg"></image>
				<image className="stepCircle unlocked" height="25" width="25" href="./images/play.svg" cursor="pointer" x="256.8820645368942" y="99.37287570313157" index="0"></image>
				<image index="1" className="stepCircle" height="50" width="50" x="198.47315653655915" y="226.12712429686843" href="./images/star_disabled.svg"></image>
				<image index="2" className="stepCircle" height="50" width="50" x="51.52684346344087" y="226.12712429686843" href="./images/star_disabled.svg"></image>
				<image index="3" className="stepCircle" height="50" width="50" x="6.117935463105795" y="86.3728757031316" href="./images/star_disabled.svg"></image>
				<image index="4" className="stepCircle" height="50" width="50" x="124.99999999999997" y="0" href="./images/star_disabled.svg"></image>
				<image index="5" className="stepCircle" height="132" width="120" x="90" y="90" href="./images/awesome_artist_disabled.svg"></image>
			</svg>
	    	</Col>
	    	<Col span={2}></Col>
    	    <Col span={6} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
    	    	<h3>It’s Alive!</h3>
    	    	<p>0 / 5</p>
    	    	<p style={{margin:'32px 0 0px 0px'}}>Follow the steps, draw and animate your own art with code. Dance, jump, race or shake - make your art move.</p>
    	    	<Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
    	    </Col>
    	    <Col span={5}></Col>
	    </Row>
	    <Row style={{height:'410px',padding:'60px auto'}}>
	    	<Col span={6}></Col>
	    	<Col span={5}>
	    	<svg viewBox="0 0 300 300" id="progressContainer">
				<polyline points="149.99999999999997,25 149.99999999999997,87.5 " stroke="#e0e1e3" strokeWidth="7" style={{strokeDasharray:'4.5'}}></polyline>
				<path d="M 149.99999999999997 25 A 125 125 0 1 0 258.25317547305485 212.5" stroke="#e0e1e3" strokeWidth="7" fill="none" style={{strokeDasharray:'4.5'}}></path>
				<path d="M 258.25317547305485 212.5 A 125 125 0 0 0 258.25317547305485 212.5" stroke="#ffb300" strokeWidth="7" fill="none"></path>
				<image index="0" className="stepCircle unlocked" height="50" width="50" x="233.25317547305485" y="187.49999999999997" href="./images/dbg.svg"></image>
				<image index="0" className="stepCircle unlocked" height="25" width="25" x="246.25317547305485" y="200.49999999999997"  href="./images/play.svg" cursor="pointer"></image>
				<image index="1" className="stepCircle" height="50" width="50" x="16.74682452694519" y="187.50000000000006" href="./images/star_disabled.svg"></image>
				<image index="2" className="stepCircle" height="50" width="50" x="124.99999999999997" y="0" href="./images/star_disabled.svg"></image>
				<image index="3" className="stepCircle" height="132" width="120" x="90" y="90" href="./images/magical_maestro_disabled.svg"></image>
			</svg>
			</Col>
			<Col span={2}></Col>
			<Col span={6} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
	    	<h3>Drop the Mic</h3>
	    	<p>0 / 3</p>
	    	<p style={{margin:'32px 0 0px 0px'}}>Let’s make some noise! Learn about loops and samples, drag and drop blocks to make big, bouncing beats.</p>
	    	<Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
	    	</Col>
	    	<Col span={5}></Col>
	    </Row>
	    <Row>
	    	<Col span={9}></Col>
	    	<Col span={6}><h2>Why should I use Kano World?</h2></Col>
	    	<Col span={9}></Col>
	    </Row>
	    <Row style={{textAlign:'center'}}>
	    	<Col span={8}>
	    		<img src="./images/make-code-hack.svg" width='50%' style={{margin:'50px auto'}}/>
	    		<h2>Make,code,hack</h2>
	    		<p>Make apps, hack hardware, create games or code works of art</p>
    		</Col>
    		<Col span={8}>
	    		<img src="./images/learn-code.svg" width='50%' style={{margin:'50px auto'}}/>
	    		<h2>Learn code</h2>
	    		<p>No coding experience required! Learn through step-by-step challenges</p>
    		</Col>
    		<Col span={8}>
	    		<img src="./images/endless-fun.svg" width='50%' style={{margin:'50px auto'}}/>
	    		<h2>Endless fun</h2>
	    		<p>Share and learn from a cool community and remix your friends’ ideas</p>
    		</Col>
    	</Row>
    	<Row style={{margin:'50px auto',textAlign:'center'}}>
			<Col span={9}></Col>
			<Col span={6}><h2>Kano is better with a kit</h2></Col>
			<Col span={9}></Col>
    	</Row>
    	<Row style={{textAlign:'center',margin:'50px auto'}}>
			<Col span={2}></Col>
			<Col span={5}>
				<Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
			      <img alt="example" width="100%" src="./images/computer-kit-complete.png" />
			    </div>
			    <div className="custom-card" >
			      <h3 style={{margin:'20px auto'}}>Computer Kit Complete</h3>
			    </div>
			    </Card>
		  	</Col>
			<Col span={5}>
				<Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
			      <img alt="example" width="100%" src="./images/computer-kit-2017.png" />
			    </div>
			    <div className="custom-card">
			      <h3 style={{margin:'20px auto'}}>Computer Kit 2017</h3>
			    </div>
			    </Card>
			</Col>
			<Col span={5}>
				<Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image" style={{ backgroundColor: '#F55845',height:'180px'}}>
			      <img alt="example" width="100%" src="./images/pixel-kit.png" />
			    </div>
			    <div className="custom-card">
			      <h3 style={{margin:'20px auto'}}>Pixel Kit</h3>
			    </div>
			    </Card>
			</Col>
			<Col span={5}>
				<Card style={{ width: '90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image" style={{ backgroundColor: '#11B0FF',height:'180px'}}>
			      <img alt="example" width="100%" src="./images/motion-sensor-kit.png" />
			    </div>
			    <div className="custom-card">
			      <h3 style={{margin:'20px auto'}}>Motion Sensor Kit</h3>
			    </div>
			    </Card>
			</Col>
			<Col span={2}></Col>
		</Row>
	    </div>
    );
  }
}
