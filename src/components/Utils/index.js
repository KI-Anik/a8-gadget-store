import toast from "react-hot-toast"

const getStoredList = () => {
    const storedListStr = localStorage.getItem('cart')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else{
        return []
    }
}

const addToStoredList = (singleCard) => {
    const storedList =  getStoredList()
  const isExits = storedList.find(item => item.id == singleCard.id)

  if (isExits) return toast.error('already selected')

    storedList.push(singleCard)
    localStorage.setItem('cart', JSON.stringify(storedList))
    toast.success('add to cart')
}

const removeList = (id) => {
    const storedList =  getStoredList()
    const remaining = storedList.filter(item => item.id != id)
    localStorage.setItem('cart', JSON.stringify(remaining))
    toast.success('remove from cart')
}

export {addToStoredList, getStoredList, removeList}