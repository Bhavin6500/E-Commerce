// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async(resolve) =>{
  // we have written by our own
  const response = await fetch("http://localhost:8080/products")
  const data = await response.json()
  resolve({data})
  }
  );
}


export function fetchProductsByFilters(filter) {
 //filter ={"category":"smartphone"}
  let queryString = "";
  for(let key in filter){
    const categoryValues = filter[key];
  queryString += `${key}=${categoryValues}&`;
  }
 // queryString += `${key}=${sort[key]}&`;

  return new Promise(async(resolve) =>{
  // we have written by our own
  const response = await fetch("http://localhost:8080/products?"+queryString);
  console.log(response)
  const data = await response.json()
  console.log(data)
  resolve({data})
  console.log(resolve(data))

  }
  );
}




