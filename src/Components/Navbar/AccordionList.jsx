import { Accordion } from '@chakra-ui/react'
import { data } from '../../data/accordionData.js';
import { AccordionListItem } from './AccordionListItem.jsx';
import { SimpleListItem } from './SimpleListItem.jsx';

export const AccordionList = () => {
    return (
        <Accordion allowMultiple allowToggle>
            {data.map((item) =>
                item.type === 'button' ? (
                    <SimpleListItem title={item.title} />
                ) : (
                    <AccordionListItem item={item} />
                )
            )}
        </Accordion>
    )
}