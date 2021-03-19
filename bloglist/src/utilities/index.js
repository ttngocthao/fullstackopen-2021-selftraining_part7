const sortList =(listArr,sortCriteria='id',order='asc') => {
  listArr.sort((a, b) => {
    const itemA = a[sortCriteria]
    const itemB = b[sortCriteria]
    let comparison = 0
    if (itemA > itemB) {
      comparison = 1
    }
    if (itemA < itemB) {
      comparison = -1
    }
    if(order==='des'){
      return comparison * -1
    }else{
      return comparison
    }

  })
  return listArr
}

export { sortList }