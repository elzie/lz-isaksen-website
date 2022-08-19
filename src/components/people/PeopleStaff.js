import React from 'react';
import styled from 'styled-components';
import './PeopleStaff.css';
import Bread from '../Bread';
import { staffRef } from '../../firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';
import AllStaffMembers from './AllStaffMembers';
import StaffMember from './StaffMember';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
const PeopleContentContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding-top: 100px;
  padding-bottom: 50px;
`;
const Headline = styled.h1`
  color: #223555;
  font-weight: 400;
  margin: 1rem 0;
`;

class PeopleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 0,
      staff: [],
      location: 0,
    };
    this.getAllStaff();
  }
  getAllStaff = async () => {
    await staffRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        const staff = {
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
          officeLocation: doc.data().officeLocation,
          imageUrl: doc.data().imageUrl,
        };

        this.setState({
          staff: [staff, ...this.state.staff],
        });
      });
    });
  };
  setProfessionType = (value) => {
    // If value is 1, grab state.staff, filter and replace.
    this.setState({
      type: value,
    });
    // switch (value) {
    //   case 1:
    //     console.log('show 1');
    //     // people = this.state.people.filter(p => p.location === 1)
    //     break;
    //   case 2:
    //     console.log('show 2');
    //     // people = this.state.people.filter(p => p.location === 2)
    //     break;
    //   case 3:
    //     console.log('show 3');
    //     // people = this.state.people.filter(p => p.type === 1)
    //     break;
    //   case 4:
    //     console.log('show 4');
    //     // people = this.state.people.filter(p => p.type === 2)
    //     break;
    //   default:
    //     // people = this.state.people;
    //     break;
    // }
  };
  setOfficeLocation = (value) => {
    this.setState({
      location: value,
    });
    switch (value) {
      case 1:
        console.log('location Aarhus');
        //
        break;
      case 2:
        console.log('location Odder');
        //
        break;

      default:
        console.log('location All');
        //
        if (value === 0) {
          this.setState({
            type: 0,
            location: 0,
          });
        }
        break;
    }
  };
  componentDidUpdate() {
    // {
    //   switch (this.state.type) {
    //     case 1:
    //       console.log('show 1');
    //       // people = this.state.people.filter(p => p.location === 1)
    //       break;
    //     case 2:
    //       console.log('show 2');
    //       // people = this.state.people.filter(p => p.location === 2)
    //       break;
    //     case 3:
    //       console.log('show 3');
    //       // people = this.state.people.filter(p => p.type === 1)
    //       break;
    //     case 4:
    //       console.log('show 4');
    //       // people = this.state.people.filter(p => p.type === 2)
    //       break;
    //     default:
    //       // people = this.state.people;
    //       break;
    //   }
    // }
  }
  render() {
    return (
      <PeopleContentContainer>
        <Bread text={'Personer'} />
        <Headline>Personer</Headline>
        <Router>
          <Switch>
            <Route
              exact
              path="/personer"
              render={(props) => (
                <AllStaffMembers
                  showNav={this.showNav}
                  stickMenuToTop={this.stickMenuToTop}
                  unstickMenuFromTop={this.unstickMenuFromTop}
                  setProfessionType={this.setProfessionType}
                  setOfficeLocation={this.setOfficeLocation}
                  {...props}
                  {...this.state}
                />
              )}
            />
            <Route
              exact
              path="/personer/:id"
              render={(props) => (
                <StaffMember
                  showNav={this.showNav}
                  stickMenuToTop={this.stickMenuToTop}
                  unstickMenuFromTop={this.unstickMenuFromTop}
                  {...props}
                  {...this.state}
                />
              )}
            />
          </Switch>
        </Router>
      </PeopleContentContainer>
    );
  }
}

export default PeopleContent;
