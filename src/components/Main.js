import React,{Component} from 'react';
// import Header from './Header';
import Description from './Description';
import Cycle from './Cycle';
import { Container, Row, Col } from 'react-grid-system';
import {Button,ButtonGroup,ButtonToolbar } from 'reactstrap';
import worm from './images/wormf.gif';
import ToggleButton from 'react-toggle-button'
class Main extends Component{
    constructor(props){
      super(props);
      this.state={

          stage0 :
          {
            label: 'LIFE CYCLE',
            image: ' ',
            description: 'The life cycle of the silkworm has five stage. Egg slarva pupa Developing Moth Adult'
          },
          stage1 : 
          {
            labelTel : 'గుడ్డు',
            label:'EGG',
            image:' ',
            description:'Egg is the first stage of a silkworm’s life cycle. The female moth lays an egg about the size of an ink dot during summer or the early fall. The egg remains in dormant stage until spring arrives. The warmth of the spring stimulates the egg to hatch. The egg of Bombyx mori is a very small and hard structure; about the size of a pin head and resembling a poppy seed (fig. 8.13). The egg shell provides a protective covering for embryonic development. When first laid, an egg light yellow. A fertile ovum darkens to a blue-gray within a few days.',
            descriptionTel: 'పట్టుపురుగు జీవితచక్రము లొ గుడ్డు మొదటి దశ .వేసవికాలం లో ఆడ పట్టుపురుగు గుడ్లను పెడుతుంది.ఆ గుడ్డు ఒక సిరా చుక్క పరిమనం లో వుంటుంది.వసంతకాల వెచ్చదనంలో ఆ గుడ్డు పొదగబడుతుంది.బొమ్మిక్ష్స్ మోరీ యొక్క గుడ్డు చాలా  చిన్నది మరియు కఠినమైనది .ఈ దస లో గుడ్డూ షెల్ ఒక రక్షన కవరింగ్ అందిస్తుంది .'
          },
          stage2 :
          {
            labelTel : 'లర్వా',
            label:'LARVA',
		        image:' ',
            description:'The larva is the vegetative stage where growth takes place. The larva of Bombyx mori, commonly called a silkworm, is host specific to mulberry. During growth, the larva molts 4 times. The period between successive molts is called an instar. The silk worm, upon hatching, is about 1/8th of an inch and extremely hairy. Young silkworms can only feed on tender mulberry leaves. However, during the growth phase they can eat tougher mulberry leaves as well. The larval stage lasts for about 27 days and the silkworm goes through five growth stages called instars, during this time. During the first molting, the silkworm sheds all its hair and gains a smooth skin.',
            descriptionTel : 'పట్టుపురుగు జీవితచక్రము లో లర్వా అనేది రెండోవ దశ .పెరుగుదల సమయంలో లర్వా 4 సార్లు మారుతుంది.ఆ పెరిగే మధ్య కాలము లో దానిని  ఇన్స్టార్ అని పిలుస్తారు.ఈ క్రమములో వాటి మీద చిన్న వెంట్రుకలు  వస్తాయి . యంగ్ పట్టుపురుగులు మల్బెరీ ఆకులను మత్రమే తింటుంది  ఈ దశలో పట్టు వస్త్రం దాని జుట్టును పక్కగా పెట్టి మృధువైన  చర్మాన్ని పొందుతుంది.'

          },
          stage3 :
          {
            labelTel : 'ప్యూప',
            label:'PUPA',
		        image:' ',
            description:'As the silkworm prepares to pupate, it spins a protective cocoon. About the size and color of a cotton ball, the cocoon is constructed from one continuous strand of silk, perhaps 1.5 km long (nearly a mile). The silk cocoon serves as protection for the pupa. Cocoons are shades of white, cream and yellow depending on silkworm genetics. After a final molt inside the cocoon, the larva develops into the brown, chitin covered structure called the pupa. Metamorphic changes of the pupa result in an emerging moth (fig. 8.14).If the silkworms are allowed to mature and break through the cocoon, the silk would be rendered useless for commercial purposes. So the encased insect is plunged into boiling water to kill the inhabitant and dissolve the glue holding the cocoon together. The end of the silk is then located and the cocoon unwound onto a spindle to be made into thread.',
            descriptionTel : 'పట్టుపురుగు పగిలిపోడానికి సిద్దంగా ఉండగా అది ఒక రక్షిత కకూన్ ను అల్లుకుంటుంది. కకూన్ అనేది పత్తి బంతి యొక్క రంగు, పరిమాణం లాగ ఉండి ఒక పోడవైన  దారం పోగుతో నిర్మించబడింది( సుమారు 1.5 కిలోమీటర్ల పోడవు ఉంటుంది). పట్టు కకూన్ లో ఉన్న కోశస్థం ని రక్షిస్తుంది. పట్టుపురుగు జన్యుశాస్త్రం మీద ఆధారపడి కకూన్ తెలుపు, పసుపు మరియూ క్రీమ్ రంగు ఛాయ లో ఉంటాయి. కకూన్ లోపల ఆకరి దిస తర్వాత లార్వ అనేది బ్రౌన్ చిటిన్ గా నిర్మించబడుతుంది, దాన్ని కోశస్థం అంటారు. ప్యూప యొక్క రూపాంతర మార్పులు వల్ల చిమ్మట ఉద్భవిస్తుంది. ఒక వేళ పట్టుపురుగు పోదగడానికి అనుమతించినట్లైతే పట్టు ని వాణిజ్యంలో వాడలేము. అందువల్ల ఆ పురుగును వేడినీల్లలో పడేసి చంపి కకూన్ కి ఉన్న గ్లూ ని కరిగిస్తారు. తర్వాత ఆ పట్టుని దారంగా తయారు చేస్తారు.'
          },
          stage4 :
          {
            labelTel : 'కకూన్',
            label:'CACOON',
		        image:' ',
            description:'Cocoon is the stage in which the larva spins silk threads around it, to protect itself from its predators. The larva traps itself inside the cocoon in order to pupate. The color of the cocoon varies, depending upon what the silkworm eats. It can range from white to golden yellow. The second molting occurs inside the cocoon, when the larva turns into a brown pupa. It takes about 2-3 weeks for the pupa to metamorphose into an adult moth.',
            descriptionTel : 'పట్టుపురుగు యొక్క జీవితక్రమము లో కకూన్ దశలో లార్వా తన సం రక్షన  కోసం  తన చుట్టూ పట్టు దారాన్ని అల్లుకుంటుంది. లార్వా పొదగడానికి కకూన్ లోపల  దాగి  వుంటుంది .పట్టుపురుగు తినే ఆహరన్ని బట్టి దాని  రంగు మారుతు వుంటుంది.దాని రంగు తెలుపు లేదా బంగారు పసుపు రంగులో వుంటుంది . ఎప్పుడైతే లార్వా బ్రౌన్ పుయ్ప గా మారుతుందో అది పెరిగినట్టు  అంటారు. అది వయోజన పట్టుపురుగు గా మారడానికి 2-3 వరాలు పడుతుంది.'
            
          },
          stage5 :
          {
            labelTel : 'వయోజన దశ',
            label:'ADULT',
		        image:' ',
            description:'The adult stage completes the life cycle of Bombyx mori. It is the reproductive stage where adults mate and females lay eggs. Moths are flightless and lack functional mouth parts, so are unable to consume the food/nutrition.Once the adult moth comes out of its cocoon, its only purpose is to find a member of the opposite sex, and mate. Males are larger than females and more active. They flap their wings rapidly to attract the females. Within 24 hours of mating, the male moth dies, while the female lays abundant eggs, after which it dies as well. There on, a new silkworm life cycle begins.',
            descriptionTel : 'వయోజన రంగం బాంబిక్స్ మోరీ జీవిత చక్రం పూర్తి చేస్తుంది.ఇది పెద్దలకు సంభోగం మరియు ఆడ పట్టుపురుగు గుడ్డ్లను  పునరుత్పత్తి చెసే  దశ.  పట్టుపురుగు నోటి భాగాలను కలిగి ఉండవు, తద్వారా ఆహారం / పోషణను తినలేకపోతున్నాయి. వయోజన చిమ్మట దాని కోకోన్ నుండి వచ్చినప్పుడు, దాని ఏకైక ఉద్దేశ్యం వ్యతిరేక లింగానికి మరియు సభ్యుడిని గుర్తించడం. పురుషులు ఆడవారి కన్నా పెద్దవి మరియు చురుకుగా ఉంటాయి. వారు ఆడవారిని ఆకర్షించడానికి వారి రెక్కలు వేగంగా ఆడతారు. సంభోగం 24 గంటల్లో, మగ చిమ్మట చనిపోతుంది, అయితే ఆడ పుష్కలంగా గుడ్లు పెట్టడం జరుగుతుంది, తర్వాత ఇది చనిపోతుంది. అక్కడ, ఒక కొత్త పట్టుపురుగు  జీవితచక్రం  ప్రారంభమవుతుంది.'
            
          },
          value : true,
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
      this.setState({value : this.state.value});
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
      this.setState({value : this.state.value});
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
      this.setState({value : this.state.value});
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
      this.setState({value : this.state.value});
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
      this.setState({value : this.state.value});
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
      this.setState({value : this.state.value});
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
    <div style={{padding:"10px",background:"#b3cde0"}}>
      <Row style={{color:"white",background:"#011f4b",padding:"20px"}}>
        <Col>
            <marquee direction="right"><img src={worm} style={{height:"50px"}}/></marquee> 
        </Col>
        <Col>
          <div> 
            {/* <marquee direction="right"><img src={worm} style={{height:"50px"}}/></marquee> */}
            <center><a href="#" style={{textDecoration:"none",color:"white",fontFamily:"timeburner",fontSize:"40px",justifyContent:"center"}} onClick = {() => this.Stage0()}><h1 style={{fontWeight:"bold"}}>LIFE CYCLE OF SILKWORM</h1></a></center>
          </div>
        </Col>
        <Col>
            <div align="right" style={{width:"100%",paddingLeft:"300px"}}><p>English</p><ToggleButton value={ this.state.value || false } onToggle={(value) => this.setState({value:!value,})} /> </div>
        </Col> 
                  
      </Row>
      <Row>
          <Col sm={8} style={{background:"#b3cde0",height:"690px",fontSize:"300%"}}>
              <Cycle egg={this.state.egg} larva={this.state.larva} pupa={this.state.pupa} moth={this.state.moth} adult={this.state.adult} />
          </Col>
          <Col sm={4} style={{background:"#005b96",fontSize:"150%"}}>
              {this.state.setStage0 ? <Description stage={this.state.stage0} val={this.state.value}/> : null }
              {this.state.setStage1 ? <Description stage={this.state.stage1} val={this.state.value}/> : null }
              {this.state.setStage2 ? <Description stage={this.state.stage2} val={this.state.value}/> : null }
              {this.state.setStage3 ? <Description stage={this.state.stage3} val={this.state.value}/> : null }
              {this.state.setStage4 ? <Description stage={this.state.stage4} val={this.state.value}/> : null }
              {this.state.setStage5 ? <Description stage={this.state.stage5} val={this.state.value}/> : null }
          </Col>
      </Row> 
      <Row>
          <Col md={8} style={{background:"#b3cde0",padding:"15px"}}>
             <div>
        <ButtonToolbar>
          <ButtonGroup style={{height:"88px",width:"1292px",fontFamily:"timeburner"}}>
            {this.state.value ? <Button color="primary" onClick = {() => this.Stage1()}> <p style={{fontSize:"200%"}}>Egg</p></Button> : <Button color="primary" onClick = {() => this.Stage1()}> <p style={{fontSize:"200%"}}>గుడ్డు</p></Button>}
            {this.state.value ? <Button color="primary" onClick = {() => this.Stage2()}> <p style={{fontSize:"200%"}}>Larva</p></Button> : <Button color="primary" onClick = {() => this.Stage2()}> <p style={{fontSize:"200%"}}>లర్వా</p></Button>}
            {this.state.value ? <Button color="primary" onClick = {() => this.Stage3()}> <p style={{fontSize:"200%"}}>Pupa</p> </Button> : <Button color="primary" onClick = {() => this.Stage3()}> <p style={{fontSize:"200%"}}>ప్యూప</p> </Button>}
            {this.state.value ? <Button color="primary" onClick = {() => this.Stage4()}> <p style={{fontSize:"200%"}}>Moth</p> </Button> : <Button color="primary" onClick = {() => this.Stage4()}> <p style={{fontSize:"200%"}}>కకూన్</p> </Button>}
            {this.state.value ? <Button color="primary" onClick = {() => this.Stage5()}> <p style={{fontSize:"200%"}}>Adult</p> </Button> : <Button color="primary" onClick = {() => this.Stage5()}> <p style={{fontSize:"200%"}}>వయోజన దశ</p> </Button>}
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
