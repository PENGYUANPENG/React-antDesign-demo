import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col,Icon, Button, Layout, Menu, Card} from 'antd';
import GameLevel from './GameLevel'
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default  class Index extends React.Component  {
    state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
		<div>
        <Layout>
         <Header style={{backgroundColor:'#fff',height:'360px',overflow:'hidden',padding:'0'}}> 
            <Row style={{width:'100%'}}>
              <Col lg={1} md={1} sm={1} xs={0}></Col>
              <Col lg={2} md={3} sm={3} xs={0}><div style={{width:'60%'}}><img alt="Kano Logo" src="./images/kano-logo.svg" /></div></Col>
              <Col lg={5} md={8} sm={8} xs={0}>
                <Menu 
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                  <Menu.Item key="mail" ><Icon type="cloud" /> World</Menu.Item>
                  <Menu.Item key="alipay"><Icon type="shopping-cart" /> Shop</Menu.Item>
                </Menu>
             </Col>
              <Col lg={8} md={3} sm={3} xs={0}></Col>
              <Col lg={2} md={3} sm={3} xs={0}><p style={{fontSize:'16px',fontWeight:'800',color:'gray',cursor:'pointer'}}>Educators</p></Col>
              <Col lg={3} md={3} sm={3} xs={0}><Button type="primary"  style={{borderRadius:'30px',width:'80%'}}>LOG IN</Button></Col>
              <Col lg={3} md={3} sm={3} xs={0}><Button type="danger" style={{borderRadius:'30px',width:'80%'}}>SIGN UP</Button></Col>
            </Row>
                
            <Row style={{width:'100%',overflow:'hidden'}}>

              <Col lg={0} md={0} sm={0} xs={6}>
                <Menu 
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <SubMenu title={<span><Icon type="bars" />Menu</span>}>
                      <MenuItemGroup title="Main">
                        <Menu.Item key="setting:1"><Icon type="cloud" />World</Menu.Item>
                        <Menu.Item key="setting:2"><Icon type="shopping-cart" />Shop</Menu.Item>
                      </MenuItemGroup>
                    <MenuItemGroup title="Educators">
                        <Menu.Item key="setting:3"><Icon type="team" /> Educators</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                </Menu>
             </Col>
             <Col lg={0} md={0} sm={0} xs={3}></Col>
            <Col lg={0} md={0} sm={0} xs={6}><div style={{width:'60%'}}><img alt="Kano Logo" src="./images/kano-logo.svg" /></div></Col>
             <Col lg={0} md={0} sm={0} xs={1}></Col>
            <Col lg={0} md={0} sm={0} xs={4}><Button type="primary"  style={{borderRadius:'30px',width:'80%'}}><Icon type="login" /></Button></Col>
            <Col lg={0} md={0} sm={0} xs={4}><Button type="danger" style={{borderRadius:'30px',width:'80%'}}><Icon type="user" /></Button></Col>
            </Row>


             <Row style={{height:'300px',backgroundImage:"url(./images/wallpaper.svg)",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}}>
                <div style={{color:'#fff',fontSize:'36px',fontWeight:'900',textAlign:'center',margin:'114px auto',lineHeight:'10px'}}>
                <p>Start coding</p>
                <p>unlock powers</p>
                </div>
            </Row>
         </Header>



         <Content style={{overflow:'hidden'}}>
            <div>



            <Row style={{height:'40px',margin:'40px auto'}}>
                <Col lg={17} md={6}></Col>
                <Col lg={3} md={12} style={{textAlign:'center'}}><Button size='large'><Icon type="edit" />NEW CREATION</Button></Col>
                <Col lg={4} md={6}></Col>
            </Row>



           <GameLevel title="WuKong Travel " description="Use code to create stunning street art! Make your own brushes, play with color - simple steps show you how"/ >
              <Row style={{height:'410px',padding:'60px auto'}}>
                <Col lg={6} md={2} sm={2} xs={6}></Col>
                <Col lg={5} md={8} sm={10} xs={12}>
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
                <Col lg={2} md={2} sm={1} xs={6}></Col>
                <Col lg={6} md={10} sm={9} xs={0} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
                    <h3>Knowledge is Power</h3>
                    <p>0 / 3</p>
                    <p style={{margin:'32px 0 0px 0px'}}>Learn to make a weather station, satellite tracker or map. Use real data from across the world to control code</p>
                    <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
                </Col>
                <Col lg={0} md={0} sm={0} xs={24} style={{color:'gray',fontSize:'16px',margin:'20px auto',textAlign:'center'}}>
                    <h3>Knowledge is Power</h3>
                    <p>0 / 3</p>
                    <p style={{margin:'32px 0 0px 0px'}}>Learn to make a weather station, satellite tracker or map. Use real data from across the world to control code</p>
                    <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
                </Col>
                <Col lg={5} md={2} sm={2} xs={0}></Col>
            </Row>
            <Row style={{height:'410px',padding:'60px auto'}}>
                <Col lg={6} md={2} sm={2} xs={6}></Col>
                <Col lg={5} md={8} sm={10} xs={12}>
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
                <Col lg={2} md={2} sm={1} xs={6}></Col>
                <Col lg={6} md={10} sm={9} xs={0} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
                <h3>It’s Alive!</h3>
                <p>0 / 5</p>
                <p style={{margin:'32px 0 0px 0px'}}>Follow the steps, draw and animate your own art with code. Dance, jump, race or shake - make your art move.</p>
                <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
            </Col>
            <Col lg={0} md={0} sm={0} xs={24} style={{color:'gray',fontSize:'16px',margin:'20px auto',textAlign:'center'}}>
                <h3>It’s Alive!</h3>
                <p>0 / 5</p>
                <p style={{margin:'32px 0 0px 0px'}}>Follow the steps, draw and animate your own art with code. Dance, jump, race or shake - make your art move.</p>
                <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
            </Col>
            <Col lg={5} md={2} sm={2} xs={0}></Col>
        </Row>
        <Row style={{height:'410px',padding:'60px auto'}}>
            <Col lg={6} md={2} sm={2} xs={6}></Col>
            <Col lg={5} md={8} sm={10} xs={12}>
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
                <Col lg={2} md={2} sm={1} xs={6}></Col>
                <Col lg={6} md={10} sm={9} xs={0} style={{color:'gray',fontSize:'16px',margin:'20px auto'}}>
            <h3>Drop the Mic</h3>
            <p>0 / 3</p>
            <p style={{margin:'32px 0 0px 0px'}}>Let’s make some noise! Learn about loops and samples, drag and drop blocks to make big, bouncing beats.</p>
            <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
            </Col>
             <Col lg={0} md={0} sm={0} xs={24} style={{color:'gray',fontSize:'16px',margin:'20px auto',textAlign:'center'}}>
            <h3>Drop the Mic</h3>
            <p>0 / 3</p>
            <p style={{margin:'32px 0 0px 0px'}}>Let’s make some noise! Learn about loops and samples, drag and drop blocks to make big, bouncing beats.</p>
            <Button size='large' style={{borderRadius:'30px',margin:'20px auto',backgroundColor:'#FF6900',color:'#fff'}}>START</Button>
            </Col>
            <Col lg={5} md={2} sm={2} xs={0}></Col>
        </Row>


        <Row style={{textAlign:'center'}}>
            <Col span={24}><h2>Why should I use Kano World?</h2></Col>
        </Row>



        <Row style={{textAlign:'center'}}>
            <Col lg={8}>
                <img src="./images/make-code-hack.svg" width='50%' style={{margin:'50px auto'}}/>
                <h2>Make,code,hack</h2>
                <p>Make apps, hack hardware, create games or code works of art</p>
            </Col>
            <Col lg={8}>
                <img src="./images/learn-code.svg" width='50%' style={{margin:'50px auto'}}/>
                <h2>Learn code</h2>
                <p>No coding experience required! Learn through step-by-step challenges</p>
            </Col>
            <Col lg={8}>
                <img src="./images/endless-fun.svg" width='50%' style={{margin:'50px auto'}}/>
                <h2>Endless fun</h2>
                <p>Share and learn from a cool community and remix your friends’ ideas</p>
            </Col>
        </Row>



        <Row style={{margin:'30px auto',textAlign:'center'}}>
            <Col span={24}><h2>Kano is better with a kit</h2></Col>
        </Row>




        <Row style={{textAlign:'center',margin:'30px auto'}}>
            <Col lg={2} md={0} sm={0} xs={0}></Col>
            <Col lg={5} md={0} sm={0} xs={0}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-complete.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card" >
                  <h3 style={{margin:'20px auto'}}>Computer Kit Complete</h3>
                </div>
                </Card>
            </Col>
            <Col lg={5} md={0} sm={0} xs={0}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-2017.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Computer Kit 2017</h3>
                </div>
                </Card>
            </Col>
            <Col lg={5} md={0} sm={0} xs={0}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#F55845',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/pixel-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Pixel Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={5} md={0} sm={0} xs={0}>
                <Card style={{ width: '90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#11B0FF',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/motion-sensor-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Motion Sensor Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={2} md={0} sm={0} xs={0} ></Col>
        </Row>
         <Row>
            <Col lg={0} md={4} sm={4} xs={0} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={8} sm={8} xs={0} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-complete.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card" >
                  <h3 style={{margin:'20px auto'}}>Computer Kit Complete</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={8} sm={8} xs={0} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-2017.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Computer Kit 2017</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={4} sm={4} xs={0} style={{textAlign:'center',margin:'30px auto'}}></Col>
          </Row>
          <Row>
            <Col lg={0} md={4} sm={4} xs={0} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={8} sm={8} xs={0} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#F55845',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/pixel-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Pixel Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={8} sm={8} xs={0} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width: '90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#11B0FF',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/motion-sensor-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Motion Sensor Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={4} sm={4} xs={0} style={{textAlign:'center',margin:'30px auto'}}></Col>
        </Row>




        <Row>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={0} sm={0} xs={16} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-complete.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card" >
                  <h3 style={{margin:'20px auto'}}>Computer Kit Complete</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
        </Row>
        <Row>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={0} sm={0} xs={16} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#FF6900',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/computer-kit-2017.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Computer Kit 2017</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
      </Row>
      <Row>
          <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={0} sm={0} xs={16} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width:'90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#F55845',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/pixel-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Pixel Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
        </Row>
        <Row>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
            <Col lg={0} md={0} sm={0} xs={16} style={{textAlign:'center',margin:'30px auto'}}>
                <Card style={{ width: '90%',cursor:'pointer',boxShadow: '5px 5px 5px #888888'}} bodyStyle={{ padding: 0 }}>
                <div className="custom-image" style={{ backgroundColor: '#11B0FF',height:'180px'}}>
                  <img alt="example" width="100%" src="./images/motion-sensor-kit.png" style={{margin:'30px auto'}}/>
                </div>
                <div className="custom-card">
                  <h3 style={{margin:'20px auto'}}>Motion Sensor Kit</h3>
                </div>
                </Card>
            </Col>
            <Col lg={0} md={0} sm={0} xs={4} style={{textAlign:'center',margin:'30px auto'}}></Col>
        </Row>
        </div>


        </Content>



        <Footer style={{backgroundColor:'#292F35',padding:'0'}}>





           <Row style={{overflow:'hidden'}}>
            <Col lg={6} md={3} sm={0} xs={0}></Col>
            <Col lg={1} md={2} sm={3} xs={0}><div style={{backgroundColor:'#11B0FF',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/connected.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={3} md={4} sm={5} xs={0}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>164,154</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>CONNECTED KANOS</p>
                </div>
            </Col>
            <Col lg={1} md={2} sm={3} xs={0}><div style={{backgroundColor:'#FF6900',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/lines-of-code.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={3} md={4} sm={5} xs={0}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>37,624,799</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>LINES OF CODE</p>
                </div>
            </Col>
            <Col lg={1} md={2} sm={3} xs={0}><div style={{backgroundColor:'#FF5845',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/shared-games.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={3} md={4} sm={5} xs={0}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>306,307</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>CREATIONS SHARED</p>
                </div>
            </Col>
            <Col lg={6} md={3} sm={0} xs={0}></Col>
           </Row>





           <Row>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
            <Col lg={0} md={0} sm={0} xs={4}><div style={{backgroundColor:'#11B0FF',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/connected.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={0} md={0} sm={0} xs={8}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>164,154</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>CONNECTED KANOS</p>
                </div>
            </Col>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
            </Row>
            <Row>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
            <Col lg={0} md={0} sm={0} xs={4}><div style={{backgroundColor:'#FF6900',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/lines-of-code.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={0} md={0} sm={0} xs={8}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>37,624,799</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>LINES OF CODE</p>
                </div>
            </Col>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
            </Row>
            <Row>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
            <Col lg={0} md={0} sm={0} xs={4}><div style={{backgroundColor:'#FF5845',width:'32px',borderRadius:'3px',margin:'12px auto'}}><img src='../../images/shared-games.png' width='60%' style={{margin:'5px 6px'}}/></div></Col>
            <Col lg={0} md={0} sm={0} xs={8}>
                <div style={{margin:'12px auto'}}>
                <p style={{fontSize:'16px',fontWeight:'800',color:'#fff',lineHeight:'16px',marginBottom:'6px'}}>306,307</p>
                <p style={{fontSize:'12px',fontWeight:'800',color:'gray',lineHeight:'5px'}}>CREATIONS SHARED</p>
                </div>
            </Col>
            <Col lg={0} md={0} sm={0} xs={6}></Col>
           </Row>



           <Row style={{textAlign:'center'}}>
                <Col lg={9} md={6} sm={3} xs={0}></Col>
                <Col lg={2} md={4} sm={6} xs={8}><a href='javascript:void(0)'>Terms of use</a></Col>
                <Col lg={2} md={4} sm={6} xs={8}><a href='javascript:void(0)'>Privacy </a></Col>
                <Col lg={2} md={4} sm={6} xs={8}><a href='javascript:void(0)'>Acceptable </a></Col>
                <Col lg={9} md={6} sm={3} xs={0}></Col>
           </Row>


        </Footer>


    </Layout>
    </div>
    );
  }
}

  