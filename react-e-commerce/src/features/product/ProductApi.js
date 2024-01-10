export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server URL here  
    const res = await fetch(`http://localhost:8080/products`);
    const data = await res.json();
    resolve({ data })
  }
  );
}

export function fetchAllProductsByFilters(filter) {
  // filter={"category":"smartphone"}
  // TODO:on server we will support multi values

  // const {}=filter;
  let queryString = '';
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    //TODO:we will not hard-code server URL here  
    const res = await fetch(`http://localhost:8080/products?`+queryString);
    const data = await res.json();
    resolve({ data })
  }
  );
}