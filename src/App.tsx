import './App.css'
import Menu, { MenuItem } from './Menu'

function App() {
    const menuItems: MenuItem[] = [
        { label: 'Home', link: '/' },
        {
            label: 'Menu 1',
            link: '/menu1',
            subMenu: [
                {
                    label: 'Sub Masdsdasdasdasdhashdhsajndladsadadadsasadsadasdadsenu 1',
                    link: '/menu1/sub1',
                    subMenu: [
                        { label: 'Sub Menu 1', link: '/menu2/sub1' },
                        { label: 'Sub Menu 2', link: '/menu2/sub2' },
                        { label: 'Sub Menu 3', link: '/menu2/sub3' },
                    ],
                },
                { label: 'Sub Menu 2', link: '/menu1/sub2' },
                { label: 'Sub Menu 3', link: '/menu1/sub3' },
                {
                    label: 'Sub Menu 4',
                    link: '/menu1/sub4',
                    subMenu: [
                        {
                            label: 'Deep Menu 1',
                            link: '/menu1/sub4/deep1',
                            subMenu: [
                                {
                                    label: 'Sub Deep 1',
                                    link: '/menu1/sub4/deep1/subdeep1',
                                },
                                {
                                    label: 'Sub sadsakdhkhaskdhaskjdiasdasdasDeep 2',
                                    link: '/menu1/sub4/deep1/subdeep2',
                                },
                                {
                                    label: 'Sub Deep 3',
                                    link: '/menu1/sub4/deep1/subdeep3',
                                },
                                {
                                    label: 'Sub Deep 4',
                                    link: '/menu1/sub4/deep1/subdeep4',
                                    subMenu: [
                                        {
                                            label: 'Sub Deep 1',
                                            link: '/menu1/sub4/deep1/subdeep1',
                                        },
                                        {
                                            label: 'Sub Deep 2',
                                            link: '/menu1/sub4/deep1/subdeep2',
                                        },
                                        {
                                            label: 'Sub Deep 3',
                                            link: '/menu1/sub4/deep1/subdeep3',
                                        },
                                        {
                                            label: 'Sub Deep 4',
                                            link: '/menu1/sub4/deep1/subdeep4',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Deep Mensadnasidasidsklasdoasmpu 2',
                            link: '/menu1/sub4/deep2',
                        },
                    ],
                },
                { label: 'Sub Menu 5', link: '/menu1/sub5' },
            ],
        },
        {
            label: 'Menu 2',
            link: '/menu2',
            subMenu: [
                { label: 'Sub Menu 1', link: '/menu2/sub1' },
                { label: 'Sub Menu 2', link: '/menu2/sub2' },
                { label: 'Sub Menu 3', link: '/menu2/sub3' },
            ],
        },
    ]
    return (
        <div className="App">
            <h1>UpStay</h1>
            <nav>
                <Menu items={menuItems} />
            </nav>
        </div>
    )
}

export default App
