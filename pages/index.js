// import ReactTable from 'react-table'
import Head from '../components/head'
import ReactTable from 'react-table'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'


class Main extends React.Component{
   componentWillMount = async() =>{
      let data = await Axios({
        method: 'get',
        url: 'https://ywc15.ywc.in.th/api/interview'
      }).then(function(response) {
        return response
      });
      console.log(data.data)
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
          },{
            name: 'Tanner Linsley',
            age: 6,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tanner Linsley',
            age: 27,
            friend: {
              name: 'Jason Maurer',
              age: 23,
            }
          },{
            name: 'Tanner Linsley',
            age: 226,
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