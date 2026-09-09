import {Outlet} from 'react-router-dom'
import MasterHeader from './MasterHeader'
import MasterFooter from './MasterFooter'

const Layout=()=>{
    return(
        <>
        <MasterHeader/>
        {/* placeholder */}
        <Outlet/>  
        <MasterFooter/>
        </>
    )
}


export default Layout