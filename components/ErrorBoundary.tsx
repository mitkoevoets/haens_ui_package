import React from 'react'
import styled from 'react-emotion'

interface IErrorBoundaryState {
    error: Error
}

interface IErrorBoundaryProps {
    children?: JSX.Element[] | JSX.Element
}

const ErrorBox = styled('section')`
    height: 100%;
    width: 100%;
    background-color: #fff;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 { font-size: 2em; }
    p { margin: 2em 0; }
    pre { background-color: #222; color: #0f0; padding: 2em; }
`

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public state: IErrorBoundaryState = {
        error: null,
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ error })
        console.warn('send to Raven', error, errorInfo)
    }

    public render() {
        if (this.state.error) {
            return (<ErrorBox>
                <h3>Oops! 😣</h3>
                <p>Sorry, something went wrong...</p>
                { process.env.NODE_ENV !== 'production'
                    ? <pre>{ JSON.stringify(this.state.error, null, 2) }</pre>
                    : null }
            </ErrorBox>)
        }

        return this.props.children
    }
}

export default ErrorBoundary
