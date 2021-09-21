// import React from 'react'
import React, { Component, createContext } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";


const RootContext = createContext();
const Provider = RootContext.Provider

const GlobalProvider = (ChildrenComp) => {
    return (
        class Context extends Component {
            sourceShoes = [
                { id: 0, name: 'Lebron 8', brand: 'Nike', isLike: false, category: 'Basket', price: 3345000, bestSeller: true, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #8EA4D7' },
                { id: 1, name: 'Dame 7', brand: 'Adidas', isLike: false, category: 'Training', price: 3345000, bestSeller: true, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #86C6DF' },
                { id: 2, name: 'D Rose 11', brand: 'Adidas', isLike: false, category: 'Lifestyle', price: 3345000, bestSeller: true, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #9BCAB4' },
                { id: 3, name: 'Zoom Rize 2', brand: 'Adidas', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 4, name: 'Dunk Low Ceramic', brand: 'Puma', isLike: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 5, name: 'AF1 x Off White', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 6, name: 'Jordan Retro', brand: 'Nike', isLike: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 7, name: 'Metcon 6 By You', brand: 'Nike', isLike: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 8, name: 'React Vision', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                { id: 9, name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 10, name: 'Dunk Low Ceramic', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 11, name: 'AF1 x Off White', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 12, name: 'Jordan Retro', brand: 'Nike', isLike: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 13, name: 'Metcon 6 By You', brand: 'Nike', isLike: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 14, name: 'React Vision', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                { id: 15, name: 'Zoom Rize 2', brand: 'Nike', isLike: false, category: 'Basket', price: 2389000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FB6A72' },
                { id: 16, name: 'Dunk Low Ceramic', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2220000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #F7A66E' },
                { id: 17, name: 'AF1 x Off White', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2999000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #ADDC89' },
                { id: 18, name: 'Jordan Retro', brand: 'Nike', isLike: false, category: 'Basket', price: 5679000, bg: 'linear-gradient(rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #FFD566' },
                { id: 19, name: 'Metcon 6 By You', brand: 'Nike', isLike: false, category: 'Training', price: 2279000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #A58CD9' },
                { id: 20, name: 'Lebron 8', brand: 'Nike', isLike: false, category: 'Lifestyle', price: 3345000, bg: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) -0.11%, rgba(255, 255, 255, 0) 100%), #69B6FC' },
                { id: 21, name: 'Overbreak Khaki', date: '13/04/2021', po: true, poLong: 30, brand: 'Nike', isLike: false, category: 'Lifestyle', price: 4345000, bg: 'linear-gradient( rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), linear-gradient( #F0DBC1, #F0DBC1)' },
                { id: 22, name: 'Zoom Letter Bro', date: '17/04/2021', po: true, poLong: 25, brand: 'Nike', isLike: false, category: 'Lifestyle', price: 2345000, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), #F9B9C3' },
                { id: 23, name: 'Kobe 5x Champ', date: '19/04/2021', po: true, poLong: 14, brand: 'Nike', isLike: false, category: 'Trining', price: 3345000, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 100%), #D2CCE6' },
                { id: 24, name: 'Dunk Low', date: '14/04/2021', po: true, poLong: 7, brand: 'Nike', isLike: false, category: 'Lifestyle', price: 3645000, bg: 'black' },
            ]
            state = {
                shoes: this.sourceShoes,
                bestSeller: [
                    { brand: 'Nike', name: 'Lebron 8', price: 2389000, isLike: false, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #8EA4D7' },
                    { brand: 'Adidas', name: 'Dame 7', price: 2389000, isLike: false, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #86C6DF' },
                    { brand: 'Adidas', name: 'D Rose 11', price: 2389000, isLike: false, bg: 'linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.12) 100%), #9BCAB4' },
                ],
                cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
                sortedBrand: '',
                filterSort: '',
                category: ['Lifestyle', 'Running', 'Basket', 'Training', 'Low Top', 'High Top'],
                visible: false,
                search: '',
                history: JSON.parse(localStorage.getItem('history')) ? JSON.parse(localStorage.getItem('history')) : [],
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
                        if (document.getElementById('search-input').value === '') {
                            this.setState({
                                search: ''
                            })
                        } else {
                            this.setState({
                                search: e.target.value
                            })
                        }
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
                                sortedBrand: e.target.value,
                                shoes: this.sourceShoes
                            })
                        } else {
                            this.setState({
                                sortedBrand: e.target.value,
                                shoes: this.sourceShoes.filter(val =>
                                    val.brand.indexOf(e.target.value) >= 0
                                )
                            })
                        }
                    }
                    return handleSortBrand
                }


                if (action.type === 'HANDLE_LIKE') {
                    const handleLike = () => {
                        this.setState({
                            shoes: this.state.shoes.map(
                                (obj, index) => (index === parseInt(action.index) ? Object.assign(obj, { isLike: !obj.isLike }) : obj)

                            )
                        })
                    }
                    return handleLike
                }
                if (action.type === 'LIKE_CLICKED') {
                    if (this.sourceShoes[parseInt(action.index)].isLike) {
                        return <AiFillHeart />
                    } else {
                        return <AiOutlineHeart />

                    }
                }

                if (action.type === 'HANDLE_CART') {
                    const notif = () => {
                        const notify = document.querySelector('.notif')
                        notify.classList.add('enable')
                        setTimeout(() => notify.classList.remove('enable'), 3000)
                    }
                    const cart = () => {
                        let size = document.getElementById('sortOption').value
                        action.shoes.size = size
                        // this.state.cart.push(action.shoes)
                        let join = this.state.cart.concat(action.shoes)
                        this.setState({
                            cart: join
                        })
                        notif()
                    }

                    return cart
                }

                if (action.type === 'HANDLE_CHECK_ITEM') {
                    const check = () => {
                        this.setState({
                            cart: this.state.cart.map((el, index) =>
                                (index === parseInt(action.index)) ? Object.assign(el, { check: !el.check }) : el
                            )
                        })
                        let cart = JSON.parse(localStorage.getItem('cart'))
                        localStorage.setItem('cart', JSON.stringify(
                            cart.map((el, index) => (
                                (index === parseInt(action.index)) ? Object.assign(el, { check: !el.check }) : el
                            ))
                        ))
                    }
                    return check
                }

                if (action.type === 'HANDLE_DELETE_ITEM') {
                    const splicing = () => {
                        let cart = JSON.parse(localStorage.getItem('cart'))
                        cart.splice(action.index, 1)
                        return cart
                    }
                    const removeItem = () => {
                        this.setState({
                            cart: splicing()
                        })
                        localStorage.setItem('cart', JSON.stringify(splicing()))
                    }
                    return removeItem
                }

                if (action.type === 'HANDLE_BUY') {
                    let date = new Date()
                    let hrs = String(date.getHours()).padStart(2, '0')
                    let mnt = String(date.getMinutes()).padStart(2, '0')
                    let dd = String(date.getDate()).padStart(2, '0');
                    let mm = String(date.getMonth() + 1).padStart(2, '0');
                    let yyyy = date.getFullYear();
                    let today = hrs + ':' + mnt + '/' + mm + '/' + dd + '/' + yyyy

                    const notif = () => {
                        const notify = document.querySelector('.notif')
                        notify.classList.add('enable')
                        setTimeout(() => notify.classList.remove('enable'), 3000)
                    }

                    const addDate = () => {
                        let cart = this.state.cart.filter((el) => el.check)

                        // cart.map(el => el.dateBuy = today )
                        cart.map(el => {
                            date.setDate(date.getDate() + el.poLong)
                            let arriveDate = date.toLocaleString().split(',')
                            el.dateBuy = today
                            // el.poLong ? el.poLong = arriveDate[0] : null
                            if (el.poLong) {
                                el.dateCount = arriveDate[0]
                            }
                            return cart
                        })
                        return cart
                    }

                    const splicing = () => {
                        let cart = this.state.cart.filter((el) => !el.check) ? this.state.cart.filter((el) => !el.check) : []
                        // cart.splice(action.index, 1)
                        return cart
                    }

                    const handleBuy = () => {
                        // let data = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : []
                        let transaction = addDate().concat(this.state.history)
                        localStorage.setItem('history', JSON.stringify(transaction))
                        localStorage.setItem('cart', JSON.stringify(splicing()))
                        this.setState({
                            history: JSON.parse(localStorage.getItem('history')),
                            cart: JSON.parse(localStorage.getItem('cart')),
                        })
                        notif()
                    }
                    return handleBuy
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