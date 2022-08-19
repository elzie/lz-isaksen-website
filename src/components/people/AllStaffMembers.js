import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
  // NavLink,
  Link,
} from 'react-router-dom';

const GridTemplate = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: space-between;
`;

const MenuGridTemplate = styled.div`
  padding-bottom: 40px;

  a {
    text-decoration: none;
  }
`;
const PeopleGridTemplate = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  div {
    margin-bottom: 60px;
    width: 375px;
    height: 375px;
    background: rgba(0, 0, 0, 0.2);
  }
`;
const Box = styled.div`
  margin-bottom: 1rem;
  border-radius: 5px;

  color: #223555;
  font-weight: 700;
  transition: all 0.3s linear;
  line-height: 0.9rem;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;

  a {
    margin-left: 10px;
    color: #223555;

    transition: all 0.3s linear;
  }
  &:hover a {
    color: #ffffff;
  }
  background: linear-gradient(to right, #223555 50%, #eef0f3 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  &:hover {
    background-position: left bottom;

    color: #ffffff;
  }
`;
class AllStaffMembers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 0,
      location: 0,
    };
  }
  componentDidMount() {
    console.log(this.props.staff);
  }
  render() {
    const { staff } = this.props;
    return (
      <div>
        <GridTemplate>
          <PeopleGridTemplate>
            {staff.map((member) => (
              <div key={member.id}>
                <Link to={'/personer/' + member.id}>
                  <div>{member.name}</div>
                </Link>
              </div>
            ))}
          </PeopleGridTemplate>
          <MenuGridTemplate>
            Stillinger
            <Box style={{ visibility: 'hidden' }}></Box>
            <div
              className={
                'listItem ' + (this.props.type === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setProfessionType(1)}>
                <i className={'fa fa-chevron-right'} />
                <p>Advokat</p>
              </button>
            </div>
            <div
              className={
                'listItem ' + (this.props.type === 2 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setProfessionType(2)}>
                <i className={'fa fa-chevron-right'} />
                <p>Advokatfuldmægtig</p>
              </button>
            </div>
            <div
              className={
                'listItem ' + (this.props.type === 3 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setProfessionType(3)}>
                <i className={'fa fa-chevron-right'} />
                <p>Sekretær</p>
              </button>
            </div>
            <div
              className={
                'listItem ' + (this.props.type === 4 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setProfessionType(4)}>
                <i className={'fa fa-chevron-right'} />
                <p>Administration</p>
              </button>
            </div>
            Kontorer
            <div
              className={
                'listItem ' + (this.props.location === 1 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setOfficeLocation(1)}>
                <i className={'fa fa-chevron-right'} />
                <p>Aarhus</p>
              </button>
            </div>
            <div
              className={
                'listItem ' + (this.props.location === 2 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setOfficeLocation(2)}>
                <i className={'fa fa-chevron-right'} />
                <p>Odder</p>
              </button>
            </div>
            <div
              className={
                'listItem ' + (this.props.location === 0 ? 'selected' : '')
              }
            >
              <div />
              <button onClick={() => this.props.setOfficeLocation(0)}>
                <i className={'fa fa-chevron-right'} />
                <p>ALLE</p>
              </button>
            </div>
          </MenuGridTemplate>
        </GridTemplate>
      </div>
    );
  }
}

export default AllStaffMembers;
