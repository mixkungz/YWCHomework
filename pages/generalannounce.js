import Head from '../components/head'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'
import Layout from '../components/layout'

injectGlobal`
.box{
    min-height:100vh;
    overflow:hidden;
    background-color:#1e262f;
}
.logo{
    max-width:250px;
}
th,tr,td{
    background:white;
}
.btn-edit{
    background:#4ccdea;
    color:white
}
`

class Announce extends React.Component{
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
        search:[],
        branchNow:'',
        timeNow:''
        
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
          this.setState({branchNow:'pg'})
          this.setState({select:this.state.allProgramming})
        }
        else if(input=='ds'){
          this.setState({select:this.state.allDesign})
          this.setState({branchNow:'ds'})
        }
        else if(input=='mk'){
          this.setState({select:this.state.allMarketing})
          this.setState({branchNow:'mk'})
        }
        else if(input=='ct'){
          this.setState({select:this.state.allContent})
          this.setState({branchNow:'ct'})
        }
      }
      timeChange = (e) =>{
        if(e.target.value=='all'){
          this.setState({select:this.state.all})
        }
        else if(e.target.value=='morning'){
          
          if(this.state.branchNow =='pg'){
            this.setState({select:this.state.allMorningProgramming})
          }
          else if(this.state.branchNow =='ds'){
            this.setState({select:this.state.allMorningDesign})
          }
          else if(this.state.branchNow =='mk'){
            this.setState({select:this.state.allMorningMarketing})
          }
          else if(this.state.branchNow =='ct'){
            this.setState({select:this.state.allMorningContent})
          }
        }
        else if(e.target.value=='afternoon'){
          
          if(this.state.branchNow =='pg'){
            this.setState({select:this.state.allAfternoonProgramming})
          }
          else if(this.state.branchNow =='ds'){
            this.setState({select:this.state.allAfternoonDesign})
          }
          else if(this.state.branchNow =='mk'){
            this.setState({select:this.state.allAfternoonMarketing})
          }
          else if(this.state.branchNow =='ct'){
            this.setState({select:this.state.allAfternoonContent})
          }
          
        }
      }
    render(){
        return(
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="text-center mt-4">
                                <img src="/static/img/logo.png" className="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col">
                            <input type="text" className="form-control" onChange={this.searchChange} />
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-5 mx-auto mt-4">
                      <select className="form-control" id="exampleFormControlSelect1" onChange={this.timeChange}>
                            <option value="all">All</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                        </select>
                      </div>
                    </div>
                    <div className="row my-4">
                
                        <div className="col">
                            <button className="btn btn-edit btn-block" onClick={()=>this.change('pg')}>Programming</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-edit btn-block" onClick={()=>this.change('ds')}>Design</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-edit btn-block" onClick={()=>this.change('mk')}>Marketing</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-edit btn-block" onClick={()=>this.change('ct')}>Content</button>
                        </div>
                    </div>
                            
                            <div className="mx-auto">
                                <table className="table w-100">
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
                            </div>
                            
                </div>
                
                
                {/*<div className="col-6 mx-auto">
                      <HeadText>YWC Interview Announcement</HeadText>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('pg')}>Programming</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('ds')}>Design</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('mk')}>Marketing</button>
                      <button className="btn btn-success btn-block" onClick={()=>this.change('ct')}>Content</button>

                      <input type="text" onChange={this.searchChange} />
                      <table className="table">
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
            </Layout>
        )
    }
}

export default Announce