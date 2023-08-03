const useAddHyphen = () => {
  const addHypen = (type: 'business' | 'phone', value: string) => {
    let formatNum

    try {
      if (type === 'business') {
        if (value.length == 10) {
          formatNum = value.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')
        } else if (value.length == 11) {
          formatNum = value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
        }
      }
    } catch (e) {
      formatNum = value
      console.log(e)
    }
    return formatNum
  }

  return addHypen
}

export default useAddHyphen