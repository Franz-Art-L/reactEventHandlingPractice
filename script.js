var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Navbar
var Navbar = function Navbar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light" },
        "Navbar"
    );
};

// Sidebar
var Sidebar = function Sidebar() {
    return React.createElement(
        "div",
        { className: "d-none d-md-block col-md-3" },
        React.createElement(
            "div",
            { className: "border border-primary py-4 px-3" },
            "Sidebar"
        )
    );
};

// FOOTER
var Footer = function Footer() {
    return React.createElement(
        "div",
        { className: "border-top p-2 text-center" },
        "Ishoboy React Practice \xA9 2022"
    );
};

// TEMPLATE 
var Template = function Template(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(Navbar, null),
        React.createElement(
            "div",
            { className: "container py-4" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col-12 col-md-9" },
                    props.children
                ),
                React.createElement(Sidebar, null)
            )
        ),
        React.createElement(Footer, null)
    );
};

// Prevent event defaults

var Link = function Link() {
    var preventTheUsual = function preventTheUsual(e) {

        e.preventDefault();
        console.log('link clicked');
    };
    return React.createElement(
        "a",
        { href: "https://www.google.com/", target: "_blank", rel: "noopener noreferrer", onClick: preventTheUsual },
        "Google"
    );
};

// App
var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            Template,
            null,
            React.createElement(Counter, null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
                "p",
                null,
                "Try to click the link below you cannot open it because I use preventDefault(), you can open it using right click through open new tab or window."
            ),
            React.createElement(Link, null)
        )
    );
};

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };

        _this.addCount = _this.addCount.bind(_this);
        _this.minusCount = _this.minusCount.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: "handleClick",
        value: function handleClick() {
            return console.log('this is: ', this);
        }
    }, {
        key: "addCount",
        value: function addCount() {
            return this.setState({
                count: this.state.count + 1
            });
        }
    }, {
        key: "minusCount",
        value: function minusCount() {
            return this.setState({
                count: this.state.count - 1
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h2",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-primary", onClick: this.addCount },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: this.minusCount },
                    "-1"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    null,
                    "Check the console.log"
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-warning", onClick: function onClick(e) {
                            return _this2.handleClick(e);
                        } },
                    "Try Click ME"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));