// Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            Navbar
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

// Prevent event defaults

const Link = () => {
    const preventTheUsual = (e) => {
        
        e.preventDefault();
        console.log('link clicked');
    }
        return (
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" onClick={preventTheUsual}>Google</a>
        ) 
    
}

// App
const App = () => {
    return (
        <React.Fragment>
            <Template>
            <Counter/>
            <br />
            <br />
            <p>Try to click the link below you cannot open it because I use preventDefault(), you can open it using right click through open new tab or window.</p>
            <Link/>
            </Template>
        </React.Fragment>
    )
}

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        }

        this.addCount = this.addCount.bind(this);
        this.minusCount = this.minusCount.bind(this);
    }

   
    


    handleClick () {
        return (
            console.log('this is: ', this)
        )
    }

    addCount () {
        return(
            this.setState({
                count: this.state.count + 1,
            })
        )
    }

    minusCount () {
        return(
            this.setState({
                count: this.state.count - 1,
            })
        )
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button className="btn btn-primary" onClick={this.addCount}>+1</button>
                <button className="btn btn-danger" onClick={this.minusCount}>-1</button>
                <br />
                <br />
                <br />
                <p>Check the console.log</p>
                <button className="btn btn-warning" onClick={e => this.handleClick(e)}>Try Click ME</button>
               
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));