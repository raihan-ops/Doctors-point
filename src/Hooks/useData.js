import { useEffect, useState } from "react";

const useData = () => {
    const [itemData, setItemData] = useState([]);
    useEffect(() => {
        fetch('./Doctors.json')
            .then(res => res.json())
            .then(data => setItemData(data));
    }, []);
    return [itemData, setItemData];
}

export default useData;