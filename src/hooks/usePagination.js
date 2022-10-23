import { useEffect, useState } from 'react';

export default function usePagination(list, itemsPerPage = 10) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list.length;
        setItemOffset(newOffset);
    };

    return {
        handlePageClick,
        currentItems,
        pageCount
    }
}
