import React from 'react';
import { staffRef } from '../../firebase';
class StaffMember extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.id);
    const memberId = this.props.match.params.id;
    const staff = this.props.staff;
    const memberArray = staff.filter((currentMember) => {
      return currentMember.id === memberId;
    });
    const member = memberArray[0];
    console.log(member.name);

    this.state = {
      id: member.id,
      name: member.name,
      phone: member.phone,
      email: member.email,
      imageUrl: member.imageUrl,
      officeLocation: member.officeLocation,
    };
  }

  componentDidMount() {}
  getStaffMember = async () => {
    await staffRef
      .doc(this.props.match.params.id)
      .get()
      .then((doc) => {
        console.log(doc.id, '=>', doc.data());
        const staff = {
          id: doc.id,
          name: doc.data().name,
          email: doc.data().email,
          phone: doc.data().phone,
          officeLocation: doc.data().officeLocation,
          imageUrl: doc.data().imageUrl,
        };

        this.setState({
          id: staff.id,
          name: staff.name,
          email: staff.email,
          phone: staff.phone,
          officeLocation: staff.officeLocation,
          imageUrl: staff.imageUrl,
        });
      });
  };
  render() {
    const { name, email, phone, officeLocation, imageUrl } = this.state;
    return (
      <div>
        <div>staff member</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{officeLocation}</div>
        <div>{imageUrl}</div>
      </div>
    );
  }
}

export default StaffMember;
