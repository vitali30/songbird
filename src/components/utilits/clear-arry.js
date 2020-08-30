function clearWariantList(array) {
    return array.map(({id}) => {return{id, checking: 'none'}})
 }

export default clearWariantList