import {Component} from "react";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <header>
                <nav className="nav navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://digit-com.be" className="navbar-brand">
                            Employee Management App
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;
