import Head from '../components/head'
import Axios from 'axios'
import styled , { injectGlobal } from 'styled-components'

const Bigbox = styled.div`
min-height:100vh;
overflow:hidden;
background-color:#1e262f;
`

class Announce extends React.Component{
    render(){
        return(
            <div>
                <Head />
                
            </div>
        )
    }
}

export default Announce