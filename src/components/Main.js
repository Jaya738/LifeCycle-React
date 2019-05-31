import React,{Component} from 'react';
// import Header from './Header';
import Description from './Description';
import Cycle from './Cycle';
import { Container, Row, Col } from 'react-grid-system';
import {Button,ButtonGroup,ButtonToolbar } from 'reactstrap';
import worm from './images/wormf.gif';
class Main extends Component{
    constructor(props){
      super(props);
      this.state={

          stage0 :
          {
            label: 'LIFE CYCLE',
            image: ' ',
            description: 'The life cycle of the silkworm has five stages. Egg,larva,pupa,Developing Moth, Adult. '
          },
          stage1 : 
          {
            label:'EGG',
            image:' ',
            description:'Egg is the first stage of a silkworm’s life cycle. The female moth lays an egg about the size of an ink dot during summer or the early fall. The egg remains in dormant stage until spring arrives. The warmth of the spring stimulates the egg to hatch. The egg of Bombyx mori is a very small and hard structure; about the size of a pin head and resembling a poppy seed (fig. 8.13). The egg shell provides a protective covering for embryonic development. When first laid, an egg light yellow. A fertile ovum darkens to a blue-gray within a few days.'
          },
          stage2 :
          {
            label:'LARVA',
		        image:' ',
		        description:'The larva is the vegetative stage where growth takes place. The larva of Bombyx mori, commonly called a silkworm, is host specific to mulberry. During growth, the larva molts 4 times. The period between successive molts is called an instar. The silk worm, upon hatching, is about 1/8th of an inch and extremely hairy. Young silkworms can only feed on tender mulberry leaves. However, during the growth phase they can eat tougher mulberry leaves as well. The larval stage lasts for about 27 days and the silkworm goes through five growth stages called instars, during this time. During the first molting, the silkworm sheds all its hair and gains a smooth skin.'
          },
          stage3 :
          {
            label:'PUPA',
		        image:' ',
		        description:'As the silkworm prepares to pupate, it spins a protective cocoon. About the size and color of a cotton ball, the cocoon is constructed from one continuous strand of silk, perhaps 1.5 km long (nearly a mile). The silk cocoon serves as protection for the pupa. Cocoons are shades of white, cream and yellow depending on silkworm genetics. After a final molt inside the cocoon, the larva develops into the brown, chitin covered structure called the pupa. Metamorphic changes of the pupa result in an emerging moth (fig. 8.14).If the silkworms are allowed to mature and break through the cocoon, the silk would be rendered useless for commercial purposes. So the encased insect is plunged into boiling water to kill the inhabitant and dissolve the glue holding the cocoon together. The end of the silk is then located and the cocoon unwound onto a spindle to be made into thread.'
          },
          stage4 :
          {
            label:'CACOON',
		        image:' ',
		        description:'Cocoon is the stage in which the larva spins silk threads around it, to protect itself from its predators. The larva traps itself inside the cocoon in order to pupate. The color of the cocoon varies, depending upon what the silkworm eats. It can range from white to golden yellow. The second molting occurs inside the cocoon, when the larva turns into a brown pupa. It takes about 2-3 weeks for the pupa to metamorphose into an adult moth.'
          },
          stage5 :
          {
            label:'ADULT',
		        image:' ',
		        description:'The adult stage completes the life cycle of Bombyx mori. It is the reproductive stage where adults mate and females lay eggs. Moths are flightless and lack functional mouth parts, so are unable to consume the food/nutrition.Once the adult moth comes out of its cocoon, its only purpose is to find a member of the opposite sex, and mate. Males are larger than females and more active. They flap their wings rapidly to attract the females. Within 24 hours of mating, the male moth dies, while the female lays abundant eggs, after which it dies as well. There on, a new silkworm life cycle begins.'
          },
          setStage0 : true,
          setStage1:false,
          setStage2:false,
          setStage3:false,
          setStage4:false,
          setStage5:false,
          egg : true,
          larva : true,
          pupa : true,
          moth : true,
          adult : true
        
      };
    }
    Stage0(){
      this.setState({setStage0 : true});
      this.setState({setStage1 : false});
      this.setState({setStage2 : false});
      this.setState({setStage3 : false});
      this.setState({setStage4 : false});
      this.setState({setStage5 : false});
      this.setState({egg : true});
      this.setState({larva : true});
      this.setState({pupa : true});
      this.setState({moth : true});
      this.setState({adult : true});
    }

    Stage1(){
      this.setState({setStage0 : false});
      this.setState({setStage1 : true});
      this.setState({setStage2 : false});
      this.setState({setStage3 : false});
      this.setState({setStage4 : false});
      this.setState({setStage5 : false});
      this.setState({egg : true});
      this.setState({larva : false});
      this.setState({pupa : false});
      this.setState({moth : false});
      this.setState({adult : false});
    }
    Stage2(){
      this.setState({setStage0 : false});
      this.setState({setStage1 : false});
      this.setState({setStage2 : true});
      this.setState({setStage3 : false});
      this.setState({setStage4 : false});
      this.setState({setStage5 : false});
      this.setState({egg : true});
      this.setState({larva : true});
      this.setState({pupa : false});
      this.setState({moth : false});
      this.setState({adult : false});
    }
    Stage3(){
      this.setState({setStage0 : false});
      this.setState({setStage1 : false});
      this.setState({setStage2 : false});
      this.setState({setStage3 : true});
      this.setState({setStage4 : false});
      this.setState({setStage5 : false});
      this.setState({egg : true});
      this.setState({larva : true});
      this.setState({pupa : true});
      this.setState({moth : false});
      this.setState({adult : false});
    }
    Stage4(){
      this.setState({setStage0 : false});
      this.setState({setStage1 : false});
      this.setState({setStage2 : false});
      this.setState({setStage3 : false});
      this.setState({setStage4 : true});
      this.setState({setStage5 : false});
      this.setState({egg : true});
      this.setState({larva : true});
      this.setState({pupa : true});
      this.setState({moth : true});
      this.setState({adult : false});
    }
    Stage5(){
      this.setState({setStage0 : false});
      this.setState({setStage1 : false});
      this.setState({setStage2 : false});
      this.setState({setStage3 : false});
      this.setState({setStage4 : false});
      this.setState({setStage5 : true});
      this.setState({egg : true});
      this.setState({larva : true});
      this.setState({pupa : true});
      this.setState({moth : true});
      this.setState({adult : true});
    }

  render(){
      return (
    <div style={{padding:"20px",background:"#b3cde0"}}>
      <Row style={{color:"white",background:"#011f4b",justifyContent:"center",padding:"20px"}}>
      
        {/* <marquee><img src={worm} style={{height:"50px"}}/></marquee>  */}
        <div> 
            {/* <marquee direction="right"><img src={worm} style={{height:"50px"}}/></marquee> */}
            <center><a href="#" style={{textDecoration:"none",color:"white",fontFamily:"timeburner",fontSize:"40px"}} onClick = {() => this.Stage0()}><h1 style={{fontWeight:"bold"}}>LIFE CYCLE OF SILKWORM</h1></a></center>
         </div> 
                  
      </Row>
      <Row>
          <Col sm={8} style={{background:"#b3cde0",height:"690px",fontSize:"300%"}}>
              <Cycle egg={this.state.egg} larva={this.state.larva} pupa={this.state.pupa} moth={this.state.moth} adult={this.state.adult} />
          </Col>
          <Col sm={4} style={{background:"#005b96",fontSize:"150%"}}>
              {this.state.setStage0 ? <Description stage={this.state.stage0}/> : null }
              {this.state.setStage1 ? <Description stage={this.state.stage1}/> : null }
              {this.state.setStage2 ? <Description stage={this.state.stage2}/> : null }
              {this.state.setStage3 ? <Description stage={this.state.stage3}/> : null }
              {this.state.setStage4 ? <Description stage={this.state.stage4}/> : null }
              {this.state.setStage5 ? <Description stage={this.state.stage5}/> : null }
          </Col>
      </Row> 
      <Row>
          <Col md={8} style={{background:"#b3cde0",padding:"15px"}}>
             <div>
        <ButtonToolbar>
          <ButtonGroup style={{height:"88px",width:"1292px",fontFamily:"timeburner"}}>
            <Button color="primary" onClick = {() => this.Stage1()}> <p style={{fontSize:"200%"}}>Egg</p></Button>
            <Button color="primary" onClick = {() => this.Stage2()}> <p style={{fontSize:"200%"}}>Larva</p></Button>
            <Button color="primary" onClick = {() => this.Stage3()}> <p style={{fontSize:"200%"}}>Pupa</p> </Button>
            <Button color="primary" onClick = {() => this.Stage4()}> <p style={{fontSize:"200%"}}>Moth</p> </Button>
            <Button color="primary" onClick = {() => this.Stage5()}> <p style={{fontSize:"200%"}}>Adult</p> </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
          </Col>   
          <Col md={4} style={{background:"#005b96"}}>
          </Col>             
      </Row>   
    </div>
  );
      }
}

export default Main;
