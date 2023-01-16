import React from 'react'

export interface MenuItem {
    label: string
    link: string
    subMenu?: MenuItem[]
}

interface Props {
    items: MenuItem[]
}

const Menu: React.FC<Props> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <li key={index}>
                        <a className={'label'} href={item.link}>
                            {item.label}
                        </a>
                        {item.subMenu && <Menu items={item.subMenu} />}
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
