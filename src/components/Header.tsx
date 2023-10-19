import '../styles/header.css'

import { Tab } from '@mui/base/Tab'
import { TabsList } from '@mui/base/TabsList'
import { TabPanel } from '@mui/base/TabPanel'
import { Tabs } from '@mui/base/Tabs'


function Header() {
    return (
        <div className='headerCard'>
            <h1 className="name">Ryan Richards</h1>
            <Tabs className='headerTabCard' defaultValue={0}>
                <TabsList>
                    <Tab className="headerTab" value={0}>Experience</Tab>
                    <Tab className="headerTab" value={1}>Projects</Tab>
                    <Tab className="headerTab" value={2}>Blog</Tab>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Header