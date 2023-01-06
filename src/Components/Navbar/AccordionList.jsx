import { Accordion } from '@chakra-ui/react'
import { data } from '../../data/accordionData.js';
import { AccordionListItem } from './AccordionListItem.jsx';
import { SimpleListItem } from './SimpleListItem.jsx';

export const AccordionList = () => {
    return (
        <Accordion allowMultiple allowToggle>
            {data.map((item, i) =>
                item.type === 'button' ? (
                    <SimpleListItem title={item.title} key={i + 1} />
                ) : (
                    <AccordionListItem item={item} key={i + 1} />
                )
            )}
        </Accordion>
    )
}