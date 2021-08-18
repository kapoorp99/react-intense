import React, { ReactElement } from 'react'
import { TopSection, MainContainer } from './styles'

function HomePage(): ReactElement {
    return (
        <MainContainer>
            <TopSection>
                <div>
                    <h1>Highest <span>climbs</span> have the <span>greatest views.</span></h1>
                </div>
                <div>
                    {/* div for monitor --start */}
                    <div>
                        <div className="monitor">
                            <img src="https://ik.imagekit.io/q8qsfnr9wag/screenshot__4__G5HuK0jBM.png?updatedAt=1629298218901" alt='' />
                        </div>
                        <div className='stand__vertical'></div>
                        <div className='stand__horizontal'></div>
                    </div>
                    {/* div for monitor --end */}
                </div>
            </TopSection>
        </MainContainer>
    )
}

export default HomePage
