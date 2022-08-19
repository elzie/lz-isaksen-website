import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bread.css';
import Fade from 'react-reveal/Fade';

export default class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // prettier-ignore
  render() {
        let id = this.props.id;
        let text = this.props.text;
        let subid = this.props.subid;
        let subtext = this.props.subtext;
        let subsubid = this.props.subsubid;
        let subsubtext = this.props.subsubtext;

        let links = [<Link key={(Math.random() * 1000)} to={"/" + text}>{text}</Link>]
        if (subid)links.push(<><span> > </span><Link to={"/" + text + "/" + subid}>{subtext}</Link></>)
        if (subsubid)links.push(<><span> > </span><Link to={"/" + text + "/" + subid + "/" + subsubid}>{subsubtext}</Link></>)


        return (
            <Fade left>
                <div id={"Bread"}>
                    <Link to={"/Forside"}>Forside</Link> <span> > </span> {links}
                </div>
            </Fade>
        );
    }
}
