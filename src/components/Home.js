
function Home() {
    return (
        <div>
            <div className="home">
                <h1>Murakami Radio</h1>
                <p>
                    {" "}
                    Haruki Murakami is a Japanese writer. His novels, essays,
                    and short stories have been bestsellers in Japan as well as
                    internationally, with his work translated into 50 languages
                    and selling millions of copies outside Japan.
                </p>
                <a href="/store">
                <button classname="go-to-store">
                    Purchase Novels Written by Murakami
                </button>
                </a>
            </div>
        </div>
    );
}

export default Home;
