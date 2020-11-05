import React from 'react';

function ErrorPage(props) {

    setTimeout(() => {
        props.history.push('/')
    }, 5000);

    return (
        <div>
            Page not found, you will be redirected in 5 secondes.
        </div>

    )
}

export default ErrorPage;