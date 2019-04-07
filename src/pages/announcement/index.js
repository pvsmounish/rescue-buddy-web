import React, { Component } from 'react';
import {
    List, Typography, Tag, Icon
    } from 'antd';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const { Text } = Typography;

const GET_ANNOUNCEMENTS = gql`
    query getAnnouncements{
        announcements{
            description,
            from,
            priority
        }
    }
`;

export class Announcement extends Component {
    
    render() {
        return (
            <div>
                <h2>Announcements</h2>
                <Query
                query={GET_ANNOUNCEMENTS}
                >
                {({ loading, error, data }) => {
                if (loading) return <Icon type='loading' style={{fontSize: 40}}/>;
                if (error) return <p>Error :(</p>;

                    return (
                        <List
                            size='large'
                            bordered
                            dataSource={data.announcements}
                            renderItem={announcement => {

                                const priorityColor = announcement.priority === 'HIGH' ? '#cf000f' : announcement.priority === 'MEDIUM' ? '#f22613' : '#ffc2b3'

                                return (
                                    <List.Item style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <div>
                                            <Tag color={priorityColor}>{announcement.priority}</Tag>
                                            {`${announcement.description}`}
                                            <Text type="secondary">{` - ${announcement.from}`}</Text>
                                        </div>
                                    </List.Item>
                                )
                            }
                            }
                        />
                    )
            }}
            </Query>
            </div>
        );
    }
}
