// http://localhost:3000/products/.*

import {useRouter} from 'next/router'

const Doc = () => {
   let router = useRouter()
   
   //let params = page.query
   console.log(router.query.id)
   console.log('hello')

   return <h1>Hello {router.query.id} world!</h1>
}

export default Doc;