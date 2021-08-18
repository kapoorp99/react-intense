import React, { ReactElement } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { HeaderContainer } from '../styles/globalStyles'

interface Props {
    heading: string,
    logoImg_src: string
    sidebar_options : {
        title: string,
        route: string
    }[]
}

function Header({ heading, logoImg_src,sidebar_options }: Props): ReactElement {
    return (
        <HeaderContainer>
            <div className='header__left'>
                <div className='logo__container'>
                    <img
                        src={logoImg_src}
                        alt='logo'
                        className='logo__img' />
                </div>
            </div>
            <div className='header__middle'>
                <h1>{heading}</h1>
            </div>
            <div className='header__right'>
                <Sidebar
                    header_text='React Intense'
                    footer_text='Give a great kickstart to your new react project'
                    sidebar_options={sidebar_options} />
            </div>
        </HeaderContainer>
    )
}

export default Header
