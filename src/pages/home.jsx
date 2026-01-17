import { Link } from "react-router";

function Home() {
    return (
        <>
            <h1>HOME</h1>

            <fieldset>
                <legend>Next</legend>
                <Link to="/key">Choose Key</Link>
            </fieldset>
        </>
    );
}

export default Home;
