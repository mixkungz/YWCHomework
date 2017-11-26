// import ReactTable from 'react-table'
import Head from '../components/head'
import ReactTable from 'react-table'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'


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
    allContent:[]
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
  }
  render() {
    const data = [{
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        }
      },{
          name: 'Tanner Linsley',
          age: 16,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        },{
          name: 'Tanner Linsley',
          age: 13,
          friend: {
            name: 'Jason Maurer',
            age: 23,
          }
        }]
    const columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }, {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Friend Name',
        accessor: d => d.friend.name // Custom value accessors!
      }, {
        Header: props => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age'
    }]
    
      return(
          <div>
              <Head />
              
              {/* <ReactTable data={data} columns={columns}/> */}
          </div>
      )
    }
}

export default Main