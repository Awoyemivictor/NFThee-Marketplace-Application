// @ts-ignore
import React from "react";
import Accordion from "react-bootstrap/Accordion";
interface AccordionCardProps {
    cards: any[];
    title: String;
    children: any;
}

export const AccordionCard = ({ title, children }: AccordionCardProps) => {
    return (
        <Accordion alwaysOpen defaultActiveKey={'0'}>
            <Accordion.Item eventKey={title}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>{children}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};
