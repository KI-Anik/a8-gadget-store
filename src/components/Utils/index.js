const getStoredList = () => {
    const storedListStr = localStorage.getItem('gadget-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}

const addToStoredList = (id) => {
    const storedList =  getStoredList()
    if(storedList.includes(id)){
        console.log( id ,'alreday exists')
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('gadget-list', storedListStr)
    }
}

export {addToStoredList, getStoredList}