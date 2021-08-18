import React, { ReactElement, useEffect, useRef, useState } from 'react'
import SidebarOption from './SidebarOption/SidebarOption';
import { SidebarContainer, SidebarUnexpanded } from '../styles/globalStyles'


interface Props {
    header_text: string,
    footer_text: string,
    sidebar_options: {
        title: string,
        route: string
    }[]
}

function Sidebar({ header_text, footer_text, sidebar_options }: Props): ReactElement {
    const [expanded, setExpanded] = useState(false);
    const ref: any = useRef(null);
    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setExpanded(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    })
    return (
        <>
            {expanded ? (
                <>
                    <SidebarContainer ref={ref}>
                        <div className='sidebar__container__top'>
                            <div className='topLeft'>
                                <h1>{header_text}</h1>
                            </div>
                            <div className='topRight close__icon' onClick={() => setExpanded(false)}>
                                <i className='fas fa-times'></i>
                            </div>
                        </div>
                        <div className='sidebar__container__middle'>
                            {sidebar_options.map(((so, i) => {
                                return (
                                    <SidebarOption title={so.title} route={so.route} />
                                )
                            }))}
                        </div>
                        <div className='sidebar__container__bottom'>
                            <h4>{footer_text}</h4>
                        </div>
                    </SidebarContainer>
                    <SidebarUnexpanded ref={ref}>
                        <div className='menu__icon' onClick={() => setExpanded(ps => !ps)}>
                            <i className='fas fa-bars'></i>
                        </div>
                    </SidebarUnexpanded>
                </>
            ) : (
                <>
                    <SidebarUnexpanded ref={ref}>
                        <div className='menu__icon' onClick={() => setExpanded(true)}>
                            <i className='fas fa-bars'></i>
                        </div>
                    </SidebarUnexpanded>
                </>
            )
            }
        </>
    )
}

export default Sidebar
