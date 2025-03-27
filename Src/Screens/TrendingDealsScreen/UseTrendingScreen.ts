import { useEffect, useState } from "react"
import { deals } from "../../Data/deals"
import { DealBO } from "../../Interface/DealBO/DealBO"

const UseTrendingScreen = () => {

    const [trendingDeals, setTrendingDeals] = useState<DealBO[]>()
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        setTrendingDeals(deals)
    }, [])

    useEffect(() => {
        filterCategories()
    }, [selectedCategory])


    const filterCategories = () => {
        const filteredDeals = selectedCategory === 'All'
        ? deals
        : deals.filter(deal => deal.category === selectedCategory);

        setTrendingDeals(filteredDeals)
    }

    const onChangeCategories = (category: string) => {
        setSelectedCategory(category)
    }

    return { trendingDeals, selectedCategory, onChangeCategories }

}


export default UseTrendingScreen