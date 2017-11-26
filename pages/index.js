// import ReactTable from 'react-table'
import Head from '../components/head'
import styled , { injectGlobal } from 'styled-components'
import Layout from '../components/layout'
import Link from 'next/link'
import Swal from 'sweetalert2'

injectGlobal`
  .box{
    min-height:100vh;
    overflow:hidden;
    background-color:#1e262f;
  }
  .heading-text{
    text-shadow: 1px 2px 6px rgba(51,204,234,0.91);
    color:white;
    text-align:center;
  }
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
  
  future = () =>{
    console.log('ttttt')
    Swal({
      title: '( ͡° ͜ʖ ͡°)',
      text: 'Future Feature',
      timer: 3000
    })
  }

  render() {
      return(
            <Layout>
              <div className="text-center">
                  <img src="/static/img/logo.png" className="logo" />
              </div>
              <h1 className="heading-text">อยากฟังผลแบบไหนหล่ะ</h1>
              <div className="d-flex justify-content-center align-item-center">
                <p className="" style={{display:'flex',justifyContent:'center'}}>
                  <span className="mybtn mx-3 my-3" onClick={this.future}>ตื่นเต้น</span>
                  <Link href="/generalannounce"><span className="mybtn mx-3 my-3">ชิลๆ</span></Link>
                </p>
                
              </div>
            </Layout>
      )
    }
}

export default Main