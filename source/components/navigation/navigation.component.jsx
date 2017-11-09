import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
                <section className="footer_nav">
                    <nav>
                        <ul>
                            <li><NavLink to="/"><span className="glyphicon glyphicon-home"></span><p>主页</p></NavLink></li>
                            <li><NavLink to="/store"><span className="glyphicon glyphicon-shopping-cart"></span><p>商城</p></NavLink></li>
                            <li><NavLink to="/comment"><span className="glyphicon glyphicon-star-empty"></span><p>点评</p></NavLink></li>
                            <li><NavLink to="/my"><span className="glyphicon glyphicon-user"></span><p>我的</p></NavLink></li>
                        </ul>
                    </nav>
                </section>
        )
    }
}

export default Navigation

