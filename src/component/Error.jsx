import '../style/Error.css';

const Error = () => {
    return (
        <div>
            <div className="container">
                <h1 className="heading">404</h1>
                <p className="message">Oops! The page you're looking for could not be found.</p>
                <p className="message">Go back to the <a href="/">home page</a>.</p>
            </div>
        </div>
    );
}

export default Error;