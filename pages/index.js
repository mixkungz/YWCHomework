// import ReactTable from 'react-table'
import Head from '../components/head'
import ReactTable from 'react-table'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'

let contacts = [{
  name:'mx',
  phone:'0022'
},{
  name:'ds',
  phone:'021'
}]
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
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
      },
      {
        name: 'Tanner Linsley',
        age: 16,
      },
      {
        name: 'Tanner Linsley',
        age: 13,
    }]
    const columns = [{
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }]
    let filteredContacts = this.props.contacts;
    // console.log(this.state.select)
      return(
          <div>
              <Head />
              <div className="container">
                <div className="row">
                  <div className="col-6 mx-auto">
                      
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
                              this.state.select.map((data)=>
                                <tr>
                                  <th scope="row">{data.interviewRef}</th>
                                  <td>{data.firstName} {data.lastName}</td>
                                </tr>
                              )
                            }
                            
                        </tbody>
                      </table>
                  </div>
                </div>
              </div>
          </div>
      )
    }
}

export default Main