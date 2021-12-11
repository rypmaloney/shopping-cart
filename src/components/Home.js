import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home">
                <h1>Murakami Radio</h1>
                <hr />
                <p>
                    Haruki Murakami is a Japanese writer. His novels, essays,
                    and short stories have been bestsellers in Japan as well as
                    internationally, with his work translated into 50 languages
                    and selling millions of copies outside Japan.
                </p>
               
                    <button classname="go-to-store">
                    <Link to="/store">
                        Purchase Novels Written by Murakami
                        </Link>
                    </button>
                
            </div>
        </div>
    );
}

export default Home;
