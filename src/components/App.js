import React from 'react';
import SearchBar from './SearchBar';
import faker from 'faker';
import UserDetail from './UserDetail';

const initUser = () => {
    return {
        email: faker.internet.email(),
        jobTitle: faker.name.jobTitle(),
        avatar: faker.internet.avatar(),
        content: faker.lorem.sentence(),
        countryCode: faker.address.countryCode()
    }
};

const listUsers = (numUsers = 10) => {
    return new Array(numUsers).fill(undefined).map(initUser);
};

let users = listUsers(10);

class App extends React.Component {
    state = {email:""}
    onSearchSubmit(term) {
        let filteredData = users.filter(item => {
            return Object.keys(item).some(key =>
                users.includes(key) ? false : item[key].toString().includes(term)
            );
          });
        
        console.log(filteredData[0].email);
        console.log(filteredData[0].jobTitle);
        console.log(filteredData[0].countryCode);
    }

    onSearchReturn(email) {
        
    }

    render() {
        console.log(users);
        return (
            <div>
                <div className="ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
                <div className="ui container">
                    <UserDetail result={this.onSearchReturn} />
                </div>
            </div>
        );
    }
}

export default App;