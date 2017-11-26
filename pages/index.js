// import ReactTable from 'react-table'
import Head from '../components/head'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'

const HeadText = styled.h1`
  text-shadow: 1px 2px 6px rgba(51,204,234,0.91);
  color:white;
  text-align:center;
`
const Bigbox = styled.div`
  min-height:100vh;
  overflow:hidden;
  background-color:#1e262f;
  // align-items: center;
  // justify-content: center;
`

injectGlobal`
  .mybtn{
    padding : 0.5em 4em 0.5em 4em;
    background:transparent;
    color:white;
    border:1px solid #4ccdea;
  }
  .mybtn:hover{
    background:#4ccdea;
    color:white;
    transition:0.7s;
  }
  .logo{
    padding-top:20%;
    max-width:250px;
  }
  @media only screen and (max-width: 500px) {
    .mybtn{
      padding : 0.5em 2em 0.5em 2em;
    }
  }
`

class Main extends React.Component{
  state={
    all:[],
    allMorning:[],
    allMorningProgramming:[],
    allMorningDesign:[],
    allMorningMarketing:[],
    allMorningContent:[],
    allAfternoon:[],
    allAfternoonProgramming:[],
    allAfternoonDesign:[],
    allAfternoonMarketing:[],
    allAfternoonContent:[],
    allProgramming:[],
    allDesign:[],
    allMarketing:[],
    allContent:[],
    rtData:[],
    rtCol:[{
      Header: 'Code',
      accessor: 'code'
    }, {
      Header: 'RealName',
      accessor: 'realname',
    }],
    select:[],
    search:[]
    
  }
  componentWillMount = async() =>{
    // all
    let data = await Axios({
      method: 'get',
      url: 'https://ywc15.ywc.in.th/api/interview'
    }).then(function(response) {
      return response
    });
    this.setState({all:data.data})
    this.setState({select:data.data})
    
    // allmorning 
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/morning'
    }).then(function(response) {
      return response
    });
    this.setState({allMorning:data.data})

    // allmorningpg
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/morning/pg'
    }).then(function(response) {
      return response
    });
    this.setState({allMorningProgramming:data.data})

    // allmorningds
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/morning/ds'
    }).then(function(response) {
      return response
    });
    this.setState({allMorningDesign:data.data})

    // allmorningct
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/morning/ct'
    }).then(function(response) {
      return response
    });
    this.setState({allMorningContent:data.data})

    // allmorningmk
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/morning/mk'
    }).then(function(response) {
      return response
    });
    this.setState({allMorningMarketing:data.data})

    // allafternoon
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/afternoon'
    }).then(function(response) {
      return response
    });
    this.setState({allAfternoon:data.data})
    
    // allafternoonpg
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/afternoon/pg'
    }).then(function(response) {
      return response
    });
    this.setState({allAfternoonProgramming:data.data})

    // allafternoonmk
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/afternoon/mk'
    }).then(function(response) {
      return response
    });
    this.setState({allAfternoonMarketing:data.data})

    // allafternoonct
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/afternoon/ct'
    }).then(function(response) {
      return response
    });
    this.setState({allAfternoonContent:data.data})

    // allafternoonds
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/afternoon/ds'
    }).then(function(response) {
      return response
    });
    this.setState({allAfternoonDesign:data.data})

    // allpg
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/programming'
    }).then(function(response) {
      return response
    });
    this.setState({allProgramming:data.data})
    
    // allmk
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/marketing'
    }).then(function(response) {
      return response
    });
    this.setState({allMarketing:data.data})

    // allct
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/content'
    }).then(function(response) {
      return response
    });
    this.setState({allContent:data.data})

    // allds
    data = await Axios({
      method: 'get',
      url: 'http://localhost:3001/namelist/design'
    }).then(function(response) {
      return response
    });
    this.setState({allDesign:data.data})

    console.log(this.state)
    // END ComponentWillMount
  }
  searchChange = async (e) =>{
    let input =e.target.value;
    let msg = input.toUpperCase()
    if(msg.length==0){
      this.setState({select:this.state.all})
    }
    else{
      let res = this.state.all.filter(input => input.firstName.indexOf(msg)>-1 || input.lastName.indexOf(msg)>-1 || input.interviewRef.indexOf(msg)>-1 )
      console.log(res)
      this.setState({select:res})
      console.log(this.state.search)
    }
  }
  change = (input) =>{
    
    if(input=='pg'){
      this.setState({select:this.state.allProgramming})
    }
    else if(input=='ds'){
      this.setState({select:this.state.allDesign})
    }
    else if(input=='mk'){
      this.setState({select:this.state.allMarketing})
    }
    else if(input=='ct'){
      this.setState({select:this.state.allContent})
    }
  }


  render() {

      return(
          <div>
              <Head />
              <Bigbox className="">
                <div className="text-center">
                  <img src="/static/img/logo.png" className="logo" />
                </div>
                <HeadText>อยากฟังผลแบบไหนหล่ะ</HeadText>
                <div className="d-flex justify-content-center">
                  <span className="mybtn mx-3 my-3">ตื่นเต้น</span>
                  <span className="mybtn mx-3 my-3">ชิลๆ</span>
                  {/* <Button className="mx-3">ตื่นเต้น</Button>
                  <Button className="mx-3">ชิลๆ</Button> */}
                </div>
                  

                    {/* <div className="col-6 mx-auto">
                      <HeadText>YWC Interview Announcement</HeadText>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('pg')}>Programming</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('ds')}>Design</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('mk')}>Marketing</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('ct')}>Content</button>

                      <input type="text" onChange={this.searchChange} />
                      <table class="table">
                          <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Real Name</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                this.state.select.map((data,index)=>
                                  <tr key={index}>
                                    <th scope="row">{data.interviewRef}</th>
                                    <td>{data.firstName} {data.lastName}</td>
                                  </tr>
                                )
                              }
                              
                          </tbody>
                        </table>
                    </div> */}
              </Bigbox>
              
          </div>
      )
    }
}

export default Main