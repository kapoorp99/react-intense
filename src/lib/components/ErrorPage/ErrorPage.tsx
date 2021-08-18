import React, { ReactElement } from 'react'
import { ErrorPageContainer } from '../styles/globalStyles'

interface Props {
    err_code:string,
    err_status: string
}

function ErrorPage({err_code,err_status}: Props): ReactElement {
    return (
        <ErrorPageContainer>
            <h1>Error {err_code}</h1>
            <h1>{err_status}</h1>
        </ErrorPageContainer>
    )
}

export default ErrorPage
