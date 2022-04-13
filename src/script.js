// Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            USELESS NAVBAR
        </nav>
    )
}

// Sidebar
const Sidebar = () => {
    return (
        <div className="d-none d-md-block col-md-3">
            <div className="border border-primary py-4 px-3">
                Sidebar
            </div>
        </div>
    );
};

// FOOTER
const Footer = () => {
    return(
        <div className="border-top p-2 text-center">
             Ishoboy React Practice © 2022
        </div>
    );
};

// TEMPLATE
const Template = props => {
    return (
    <div>
        <Navbar/>
            <div className="container py-4">
                <div className="row">
                        <div className="col-12 col-md-9">
                            {props.children}
                        </div>
                    <Sidebar/>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

// Prevent default when clicking a link
const Link = () => {
    const noPopUp = (e) => {
        e.preventDefault();
        alert('Sorry you cannot open Google');
    };

    return (
        <a href="https://www.google.com/" target="_blank" onClick={noPopUp}>google.com</a>
    );
};

// Counter Class Component
class Counter extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
        }

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.changeCountWithAmount = this.changeCountWithAmount.bind(this);

    };

    addOne() {
        this.setState({
            count: this.state.count + 1,
        })
    };

    minusOne() {
        this.setState({
            count: this.state.count - 1,
        })
    };

    handleClick() {
        console.log('this is', this)
        this.setState({
            count: this.state.count + 2
        })
    };

    changeCountWithAmount(amount) {
        this.setState({
            count: this.state.count + amount
        })
    };

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button className="btn btn-primary" onClick={this.addOne}> + 1</button>
                {' '}
                <button className="btn btn-warning" onClick={this.minusOne}> - 1</button>
                <br />
                <br />
                <br />

                <p>The below buttons uses arrow functions syntax and pass the amount of count as an argument, unlike the above buttons that has their own methods and binding.</p>
                <p>Buttons below only uses one method which is only the addOneWithAmount().</p>

                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(1)}> PLUS 1</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(2)}> PLUS 2</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(3)}> PLUS 3</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(4)}> PLUS 4</button>

                <br />
                <br />
                <br />

                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(-1)}> Minus 1</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(-2)}> Minus 2</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(-3)}> Minus 3</button>
                {' '}
                <button className="btn btn-danger" onClick={() => this.changeCountWithAmount(-4)}> Minus 4</button>

                <br />
                <br />
                <br />

                <p>Check the console when you click the button below</p>
                <button onClick={(e) => this.handleClick(e)}>Click me to add 2</button>
                <p>It is the other way for us not anymore bind the this when we call a function but it is not recommended, binding still the much better choice.</p>
            </div>
        );
    }
}

// ScrollLogger
class ScrollLogger extends React.Component {
    constructor() {
        super();

        this.state = {
            scrollY: 0
        };

        this.updateYpx = this.updateYpx.bind(this);
    };

    updateYpx() {
        this.setState({scrollY: Math.round(window.scrollY)});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.updateYpx);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateYpx);
    };

    render() {
        return (
            <div className="position-fixed bg-white p-3" style={{right: 0, top: 0}}>
                Scrolled: {this.state.scrollY}px
            </div>
        );
    }
}

// App
const App = () => {
    return (
        <React.Fragment>
            <Template>
                <Counter/>
                    <Link/>
                    <p>you cannot open the link above by clicking it, you should rather use right click and open it through new tab or new window</p>
                    <ScrollLogger/>
            </Template>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))