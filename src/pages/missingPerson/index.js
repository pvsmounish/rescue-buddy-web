import React, { Component } from 'react';
import {
    Card, Collapse, Divider
    } from 'antd';
import { MissingPersonForm } from './form';
const { Panel } = Collapse;
const { Meta } = Card;

export class MissingPerson extends Component {

    renderMissingPerson = () => (
        <Card
        bordered={true}
        hoverable
        style={{ width: 240, margin: 20 }}
        cover={<img alt="example" src="https://mounishsai.com/images/mounish-sai.jpg" />}
        >
            <Meta
                title="Mounish Sai"
                description="Age: 21"
            />
        </Card>
    )

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
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        this.renderMissingPerson()
                    }
                    {
                        this.renderMissingPerson()
                    }
                    {
                        this.renderMissingPerson()
                    }
                    {
                        this.renderMissingPerson()
                    }
                    {
                        this.renderMissingPerson()
                    }
                    </div>
                </Card>
            </div>
        );
    }
}
