import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Icon, Button} from 'antd';

export default  class Nav extends React.Component  {
  render() {
    return (
		<div>
    	    <Row style={{height:'60px'}}>
    	      <Col span={2}><div style={{width:'60%',margin:'10% auto'}}><img alt="Kano Logo" src="./images/kano-logo.svg" /></div></Col>
    	      <Col span={2}><div style={{fontSize:'16px',fontWeight:'800',color:'orange',margin:'15% auto',cursor:'pointer'}}><Icon type="cloud" /> World</div></Col>
    	      <Col span={2}><div style={{fontSize:'16px',fontWeight:'800',color:'gray',margin:'15% auto',cursor:'pointer'}}><Icon type="shopping-cart" /> Shop</div></Col>
    	      <Col span={12}></Col>
    	      <Col span={2}><p style={{fontSize:'16px',fontWeight:'800',color:'gray',margin:'15% auto',cursor:'pointer'}}>Educators</p></Col>
    	      <Col span={2}><div style={{margin:'15% auto'}}><Button type="primary"  style={{borderRadius:'30px',width:'80%'}}>LOG IN</Button></div></Col>
    	      <Col span={2}><div style={{margin:'15% auto'}}><Button type="danger" style={{borderRadius:'30px',width:'80%'}}>SIGN UP</Button></div></Col>
    	    </Row>
	    </div>
    );
  }
}

  