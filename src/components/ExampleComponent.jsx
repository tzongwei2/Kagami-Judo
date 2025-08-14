import React from 'react';

const ExampleComponent = (props) => {
    return (
        <div>
            <h1>Hello from ExampleComponent!</h1>
            <p>{props.message}</p>
        </div>
    );
};

export default ExampleComponent;