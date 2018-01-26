import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Icon, Button, Layout, Menu, Card} from 'antd';
var stationData=[
			{index:"0",className:"stepCircle unlocked",height:"50",width:"50",x:"222.7289353085037",y:"47.063774767658316",href:"./images/dbg.svg"},
			{index:"1",className:"stepCircle unlocked",height:"25",width:"25",x:"235.7289353085037",y:"60.063774767658316",href:"./images/play.svg",cursor:"pointer"},
    		{index:"2",className:"stepCircle",height:"50",width:"50",x:"246.86598902272794",y:"152.8151167445393",href:"./images/star_disabled.svg"},
    		{index:"3",className:"stepCircle",height:"50",width:"50",x:"179.23546738969478",y:"237.62110848780242",href:"./images/star_disabled.svg"},
    		{index:"4",className:"stepCircle",height:"50",width:"50",x:"70.76453261030524",y:"237.62110848780242",href:"./images/star_disabled.svg"},
    		{index:"5",className:"stepCircle",height:"50",width:"50",x:"3.134010977272041",y:"152.81511674453932",href:"./images/star_disabled.svg"},
    		{index:"6",className:"stepCircle",height:"50",width:"50",x:"27.271064691496264",y:"47.06377476765833",href:"./images/star_disabled.svg"},
    		{index:"7",className:"stepCircle",height:"50",width:"50",x:"124.99999999999997",y:"0",href:"./images/star_disabled.svg"},
    		{index:"8",className:"stepCircle",height:"132",width:"120",x:"90",y:"90",href:"./images/street_artist_disabled.svg"}
			];
var Image = stationData.map(station => <image key={station.index} index={station.index} className={station.className} height={station.height} width={station.width} x={station.x} y={station.y} href={station.href} cursor={station.cursor}></image>);
export default  class GameLevel extends React.Component  {
	render() {
    return (
		  <Row style={{height:'410px',padding:'60px auto'}}>
                <Col lg={6} md={2} sm={2} xs={6}></Col>
                <Col lg={5} md={8} sm={10} xs={12}>
                    <svg viewBox="0 0 300 300" id="progressContainer">
                    <polyline points="149.99999999999997,25 149.99999999999997,87.5 " stroke="#e0e1e3" strokeWidth="7" style={{strokeDasharray:'4.5'}}></polyline>
                    <path d="M 149.99999999999997 25 A 125 125 0 1 0 247.7289353085037 72.06377476765832" stroke="#e0e1e3" strokeWidth="7" fill="none" style={{strokeDasharray:'4.5'}}></path>
                    <path d="M 247.7289353085037 72.06377476765832 A 125 125 0 0 0 247.7289353085037 72.06377476765832" stroke="#ffb300" strokeWidth="7" fill="none"></path>
                    {Image}
                    </svg>
                </Col>
                <Col lg={2} md={2} sm={1} xs={6}></Col>
                <Col lg={6} md={10} sm={9} xs={0} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
                    <h3>{this.props.title}</h3>
                    <p>0 / 7</p>
                    <p style={{margin:'32px 0 0px 0px'}}>{this.props.description}</p>
                    <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
                </Col>
                <Col lg={0} md={0} sm={0} xs={24} style={{color:'gray',fontSize:'16px',margin:'20px auto',textAlign:'center'}}>
                    <h3>Street Artist</h3>
                    <p>0 / 7</p>
                    <p style={{margin:'32px 0 0px 0px'}}>Use code to create stunning street art! Make your own brushes, play with color - simple steps show you how</p>
                    <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
                </Col>
                <Col lg={5} md={2} sm={2} xs={0}></Col>
              </Row>
    );
  }
}