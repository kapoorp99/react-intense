import { ReactElement } from 'react'
import { SidebarOptionContainer, SidebarOptionLink } from '../../styles/globalStyles'

interface Props {
    title: string,
    route: string
    
}

function SidebarOption({title,route}: Props): ReactElement {
    return (
        <SidebarOptionContainer>
            <SidebarOptionLink to={route}>{title}</SidebarOptionLink>
        </SidebarOptionContainer>
    )
}

export default SidebarOption
