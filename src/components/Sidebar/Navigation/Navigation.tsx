import React from 'react';
import 'macro-css'
import NavigationElement, {NavigationElementType} from './NavigationElement';

type NavigationPropsType = {
    navigationElements: Array<NavigationElementType>
}

const Navigation = (props: NavigationPropsType) => {
    let navigationList = props.navigationElements.map((navLink) => {
        return (
            <NavigationElement
                key={navLink.id}
                id={navLink.id}
                link={navLink.link}
                navTitle={navLink.navTitle}
                linkIcon={navLink.linkIcon}
            />
        )
    })

    return <>{navigationList}</>

};

export default Navigation