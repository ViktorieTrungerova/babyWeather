import Alert from 'react-bootstrap/Alert';

function Message({id, text, variant}) {
    return (
        <>
            <Alert id={id} key={variant} variant={variant}>
                {text}
            </Alert>
        </>
    );
}

export default Message;