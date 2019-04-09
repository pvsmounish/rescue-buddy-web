import React, { Component } from 'react';
import {
    Card, Collapse, Divider, Icon, Modal, Button
    } from 'antd';
import { MissingPersonForm } from './form';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const { Panel } = Collapse;
const { Meta } = Card;

const GET_MISSING_PERSONS = gql`
    query getMissingPersons{
        missingPersons{
            id,
            name,
            description,
            age,
            gender,
            photoUrl,
            missingDateTime,
            guardianName,
            guardianMobile,
            city,
            address,
            createdAt,
        }
    }
`;

export class MissingPerson extends Component {

    missingPersonCard = (missingPerson) => (
        <Card
        key={missingPerson.id}
        bordered={true}
        hoverable
        style={{ width: 240, margin: 20 }}
        cover={<img alt={missingPerson.name} title={missingPerson.name} src={missingPerson.photoUrl} />}
        onClick={() => this.missingPersonModal(missingPerson)}
        >
            <Meta
                title={missingPerson.name}
                description={`City: ${missingPerson.city}`}
            />
        </Card>
)

    missingPersonModal = (missingPerson) => {

        const missingDateTime = new Date(Number(missingPerson.missingDateTime));
        
        Modal.info({
            title: 'Missing Person Info',
            content: (
                <div>
                    <Card
                    bordered={true}
                    style={{ width: 240, margin: 20 }}
                    cover={<img alt="example" src={missingPerson.photoUrl} />}
                    >
                        <Meta
                            title={`Name: ${missingPerson.name}`}
                            description={missingPerson.description}
                        />
                    </Card>
                    <p>Age: {missingPerson.age}</p>
                    <p>Gender: {missingPerson.gender}</p>
                    <p>Missing From: {`${missingDateTime.toDateString()} - ${missingDateTime.toTimeString()}`}</p>
                    <p>Guardian Name: {missingPerson.guardianName}</p>
                    <p>Guardian Mobile: {missingPerson.guardianMobile}</p>
                    <p>City: {missingPerson.city}</p>
                    <p>Address: {missingPerson.address}</p>
                </div>
            ),
            onOk() {},
        })
    }

    render() {

        return(
            <div>
                <Collapse>
                    <Panel header="Add Missing Person" key="1">
                        <MissingPersonForm />
                    </Panel>
                </Collapse>
                <Divider />
                <Card title="Missing Persons">
                    
                    <Query
                        query={GET_MISSING_PERSONS}
                        >
                            {({ loading, error, data }) => {
                            if (loading) return <Icon type='loading' style={{fontSize: 40}}/>;
                            if (error) return <p>Error :(</p>;

                            return (
                                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                    {data.missingPersons &&
                                        data.missingPersons.map((missingPerson) => this.missingPersonCard(missingPerson))
                                    }
                                </div>
                            )
                            }}
                    </Query>
                </Card>
            </div>
        );
    }
}
