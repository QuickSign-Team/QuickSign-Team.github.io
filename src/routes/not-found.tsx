const NotFound: Component<{},{}> = function() {
    this.css = `
    margin: 3rem
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