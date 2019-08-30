export const getMaxId = arrObj => (arrObj.length) ? arrObj.reduce((max, obj) => maxValue(max, obj),0) : 0;
export const maxValue = (max, obj) => (obj.id > max) ? obj.id : max;