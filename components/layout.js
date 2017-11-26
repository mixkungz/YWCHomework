import Head from '../components/head'
import styled , { injectGlobal } from 'styled-components'


injectGlobal`
.box{
    min-height:100vh;
    overflow:hidden;
    background-color:#1e262f;
}
`

const Layout = (props) =>(
    <div className="box">
        <Head/>
            {props.children}
    </div>
)
export default Layout