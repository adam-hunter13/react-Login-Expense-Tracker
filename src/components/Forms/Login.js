import './Login.css';

const Login = () => {
    return (
        <>
            <form>
                <input type="text" className="regField" placeholder="username" />
                <input type="text" className="regField" placeholder="pasword" />
                <input type="submit" className="submitBtn" value="LOGIN" />
            </form>
        </>
    );
}

export default Login;