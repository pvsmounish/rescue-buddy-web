import React, { Component, ReactFragment } from 'react';
import {
    List, Typography, Tag
    } from 'antd';

    const { Text } = Typography;

export class Announcement extends Component {

    state = {
        announcementsList: [
            {
                description: 'Tsunami at XYZ Beach',
                priority: 'HIGH',
                from: 'Cheif Minister'
            },
            {
                description: 'New Relief center @ Katpadi',
                priority: 'MEDIUM',
                from: 'Cheif Minister'
            },
            {
                description: 'Please check RescueBuddy for regular updates',
                priority: 'LOW',
                from: 'Mayor'
            },
        ]
    }
    
    render() {
        return (
            <div>
                <h2>Announcements</h2>
                <List
                    size='large'
                    bordered
                    dataSource={this.state.announcementsList}
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
            </div>
        );
    }
}
