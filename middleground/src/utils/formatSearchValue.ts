
// 普通处理表单传递数据的方法过虑
export const formatSearchValue: (values: any, timeType: string | null) => any = (values, timeType) => {
  if(timeType){
      // 有时间类型
      for (const key in values) {
          if (values[key] === '' || values[key] === null || values[key] === undefined || values[key] < 0 || key === timeType) {
            delete values[key]
          }
          if (typeof values[key] === 'string' && values[key].trim() === '' &&  values[key] < 0 && key === timeType) {
            delete values[key]
          }
          if (typeof values[key] === 'string'){
            values[key] = values[key].trim()
          }
        }
  }else{
      // 没有时间类型
      for (const key in values) {
          if (values[key] === '' || values[key] === null || values[key] === undefined || values[key] < 0 ) {
            delete values[key]
          }
          if (typeof values[key] === 'string' && values[key].trim() === '' &&  values[key] < 0 ) {
            delete values[key]
          }
          if (typeof values[key] === 'string'){
            values[key] = values[key].trim()
          }
        }
  }

  return values;
};


// 特殊处理表单传递数据的方法过虑
export const formatSearchValueNegative: (values: any, timeType: string | null) => any = (values, timeType) => {
    if(timeType){
        // 有时间类型
        for (const key in values) {
            if (values[key] === '' || values[key] === null || values[key] === undefined  || key === timeType) {
                delete values[key]
            }
            if (typeof values[key] === 'string' && values[key].trim() === ''  && key === timeType) { // 对小于 -1 和 0 不进行删除
                delete values[key]
            }
            if (typeof values[key] === 'string'){
                values[key] = values[key].trim()
            }
        }
    }else{
        // 没有时间类型
        for (const key in values) {
            if (values[key] === '' || values[key] === null || values[key] === undefined ) { // 对小于 -1 和 0 不进行删除
                delete values[key]
            }
            if (typeof values[key] === 'string' && values[key].trim() === '' ) { // 对小于 -1 和 0 不进行删除
                delete values[key]
            }
            if (typeof values[key] === 'string'){
                values[key] = values[key].trim()
            }
        }
    }

    return values;
};
