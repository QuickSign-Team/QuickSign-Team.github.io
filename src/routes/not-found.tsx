const NotFound: Component<{},{}> = function() {
    this.css = `
    margin: 1rem;

    * {
        margin-block: 0.25rem
    }
    `
    return (
        <div>
            <h1>404</h1>
            <p>The requested page just... doesn't exist. Sorry.</p>
            <a href="/">Back to main page</a>
        </div>
    )
}

export default NotFound;