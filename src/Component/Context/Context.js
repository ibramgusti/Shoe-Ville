// import React from 'react'
import React, { Component, createContext } from 'react'

const RootContext = createContext();
const Provider = RootContext.Provider

const GlobalProvider = (ChildrenComp) => {
    return (
        class Context extends Component {
            state = {
                shoes: [
                    { name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                    { name: 'Dunk Low Ceramic', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                    { name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                    { name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                    { name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                    { name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                    { name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                    { name: 'Dunk Low Ceramic', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                    { name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                    { name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                    { name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                    { name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                    { name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                    { name: 'Dunk Low Ceramic', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                    { name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                    { name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                    { name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                    { name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                ],
                category: ['Lifestyle', 'Running', 'Basket', 'Training', 'Low Top', 'High Top'],
                visible: false,
                search: '',
            }

            dispatch = (action) => {
                if (action.type === 'HANDLE_CLICK_NAVBAR') {
                    return this.setState(prevState => ({
                        visible: !prevState.visible
                    }))
                }
                if (action.type === 'HANDLE_CLICK_NAVIGATION') {
                    return this.setState({
                        visible: false,
                    })
                }
                if (action.type === 'HANDLE_SEARCH') {
                    const handleChange = (e) => {
                        this.setState({
                            search: e.target.value
                        })
                    }
                    return handleChange
                }
                if (action.type === 'HANDLE_SIGN') {
                    const handlesign = (e) => {
                        console.log(e);
                    }
                    return handlesign
                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <ChildrenComp {...this.props} />
                    </Provider>

                )
            }
        }
    )
}

export default GlobalProvider

const Consumer = RootContext.Consumer

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props}{...this.state} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}