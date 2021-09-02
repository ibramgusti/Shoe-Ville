// import React from 'react'
import React, { Component, createContext } from 'react'

const RootContext = createContext();
const Provider = RootContext.Provider

const GlobalProvider = (ChildrenComp) => {
    return (
        class Context extends Component {
            sourceShoes = [
                { id: 0, name: 'Zoom Rize 2', brand: 'Adidas', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 1, name: 'Dunk Low Ceramic', brand: 'Puma', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 2, name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 3, name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 4, name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 5, name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                { id: 6, name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 7, name: 'Dunk Low Ceramic', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 8, name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 9, name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 10, name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 11, name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                { id: 12, name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 13, name: 'Dunk Low Ceramic', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 14, name: 'AF1 x Off White', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 15, name: 'Jordan Retro', brand: 'Nike', isLove: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 16, name: 'Metcon 6 By You', brand: 'Nike', isLove: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 17, name: 'React Vision', brand: 'Nike', isLove: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
            ]
            state = {
                shoes: this.sourceShoes,
                cart: [],
                sortedBrand: '',
                filterSort: '',
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

                if (action.type === 'HANDLE_SORT') {
                    const handleSort = (e) => {
                        const filter = e.target.value
                        this.setState((state) => ({
                            filterSort: filter,
                            shoes: this.state.shoes.slice().sort((a, b) =>
                                filter === 'Cheapest' ?
                                    ((a.price > b.price) ? 1 : -1) :
                                    filter === 'Most Expensive' ?
                                        ((a.price < b.price) ? 1 : -1) :
                                        ((a.id > b.id) ? 1 : -1)
                                // window.location.reload()
                            )
                        }))
                    }
                    return handleSort
                }

                if (action.type === 'HANDLE_SORT_BRAND') {
                    const handleSortBrand = (e) => {
                        if (e.target.value === '') {
                            this.setState({
                                sortedBrand: e.target.value
                            })
                        } else if (e.target.value === 'All') {
                            this.setState({
                                shoes: this.sourceShoes
                            })
                        } else {
                            this.setState({
                                sortedBrand: e.target.value,
                                shoes: this.sourceShoes.filter(val => {
                                    return val.brand.indexOf(e.target.value) >= 0
                                })
                            })
                        }
                    }
                    return handleSortBrand
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