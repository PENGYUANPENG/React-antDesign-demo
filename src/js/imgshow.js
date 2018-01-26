import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col} from 'antd';

export default  class ImgShow extends React.Component  {
  render() {
    return (
		<div>
    	    <Row style={{height:'300px',backgroundImage:"url(./images/wallpaper.svg)",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
    	    	<div style={{color:'#fff',fontSize:'36px',fontWeight:'900',textAlign:'center',margin:'114px auto',lineHeight:'10px'}}>
    	    	<p>Start coding</p>
    	    	<p>unlock powers</p>
    	    	</div>
    	    </Row>
	    </div>
    );
  }
}
