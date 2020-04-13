import React from 'react';
import faker from 'faker';
import FlagCard from './FlagCard';

class UserDetail extends React.Component {

    render() {
        return (
        <div className="ui segment" style={{ width: '354px',height: '115px' }}>
            <div>
                {faker.internet.email()}
            </div>
            <div>
                {faker.name.jobTitle()}
            </div>
            <div style={{ marginTop: '10px' }}>
                <div style={{ float: 'left' }}><FlagCard /></div>
                <div style={{ float: 'left',width: '245px' }}>{faker.lorem.lines()}</div>
            </div>
        </div>
        );
    }
}

export default UserDetail;