var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Navbar
var Navbar = function Navbar() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light" },
        "USELESS NAVBAR"
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

// Prevent default when clicking a link
var Link = function Link() {
    var noPopUp = function noPopUp(e) {
        e.preventDefault();
        alert('Sorry you cannot open Google');
    };

    return React.createElement(
        "a",
        { href: "https://www.google.com/", target: "_blank", onClick: noPopUp },
        "google.com"
    );
};

// Counter Class Component

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this.state = {
            count: 0
        };

        _this.addOne = _this.addOne.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.changeCountWithAmount = _this.changeCountWithAmount.bind(_this);

        return _this;
    }

    _createClass(Counter, [{
        key: "addOne",
        value: function addOne() {
            this.setState({
                count: this.state.count + 1
            });
        }
    }, {
        key: "minusOne",
        value: function minusOne() {
            this.setState({
                count: this.state.count - 1
            });
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            console.log('this is', this);
            this.setState({
                count: this.state.count + 2
            });
        }
    }, {
        key: "changeCountWithAmount",
        value: function changeCountWithAmount(amount) {
            this.setState({
                count: this.state.count + amount
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
                    { className: "btn btn-primary", onClick: this.addOne },
                    " + 1"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-warning", onClick: this.minusOne },
                    " - 1"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    null,
                    "The below buttons uses arrow functions syntax and pass the amount of count as an argument, unlike the above buttons that has their own methods and binding."
                ),
                React.createElement(
                    "p",
                    null,
                    "Buttons below only uses one method which is only the addOneWithAmount()."
                ),
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(1);
                        } },
                    " PLUS 1"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(2);
                        } },
                    " PLUS 2"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(3);
                        } },
                    " PLUS 3"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(4);
                        } },
                    " PLUS 4"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(-1);
                        } },
                    " Minus 1"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(-2);
                        } },
                    " Minus 2"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(-3);
                        } },
                    " Minus 3"
                ),
                ' ',
                React.createElement(
                    "button",
                    { className: "btn btn-danger", onClick: function onClick() {
                            return _this2.changeCountWithAmount(-4);
                        } },
                    " Minus 4"
                ),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                    "p",
                    null,
                    "Check the console when you click the button below"
                ),
                React.createElement(
                    "button",
                    { onClick: function onClick(e) {
                            return _this2.handleClick(e);
                        } },
                    "Click me to add 2"
                ),
                React.createElement(
                    "p",
                    null,
                    "It is the other way for us not anymore bind the this when we call a function but it is not recommended, binding still the much better choice."
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

// ScrollLogger


var ScrollLogger = function (_React$Component2) {
    _inherits(ScrollLogger, _React$Component2);

    function ScrollLogger() {
        _classCallCheck(this, ScrollLogger);

        var _this3 = _possibleConstructorReturn(this, (ScrollLogger.__proto__ || Object.getPrototypeOf(ScrollLogger)).call(this));

        _this3.state = {
            scrollY: 0
        };

        _this3.updateYpx = _this3.updateYpx.bind(_this3);
        return _this3;
    }

    _createClass(ScrollLogger, [{
        key: "updateYpx",
        value: function updateYpx() {
            this.setState({ scrollY: Math.round(window.scrollY) });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            window.addEventListener('scroll', this.updateYpx);
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener('scroll', this.updateYpx);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "position-fixed bg-white p-3", style: { right: 0, top: 0 } },
                "Scrolled: ",
                this.state.scrollY,
                "px"
            );
        }
    }]);

    return ScrollLogger;
}(React.Component);

// App


var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            Template,
            null,
            React.createElement(Counter, null),
            React.createElement(Link, null),
            React.createElement(
                "p",
                null,
                "you cannot open the link above by clicking it, you should rather use right click and open it through new tab or new window"
            ),
            React.createElement(ScrollLogger, null)
        )
    );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));