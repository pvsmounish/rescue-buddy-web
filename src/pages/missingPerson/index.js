import React, { Component } from 'react';
import {
    Card, Collapse, Divider, Icon
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
            createdAt,
        }
    }
`;

export class MissingPerson extends Component {

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
                                            data.missingPersons.map(missingPerson => (
                                                <Card
                                                id={missingPerson.id}
                                                bordered={true}
                                                hoverable
                                                style={{ width: 240, margin: 20 }}
                                                cover={<img alt="example" src={missingPerson.photoUrl} />}
                                                >
                                                    <Meta
                                                        title={missingPerson.name}
                                                        description={`Age: ${missingPerson.age}`}
                                                    />
                                                </Card>
                                        ))
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
