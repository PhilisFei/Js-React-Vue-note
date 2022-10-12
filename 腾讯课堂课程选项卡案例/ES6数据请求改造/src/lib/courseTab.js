function filterData(data, field){
    return data.filter((item) => {
        if(field === 'all'){
            return true;
        }
        return field === item.field;
    });

}

export {
    filterData
};