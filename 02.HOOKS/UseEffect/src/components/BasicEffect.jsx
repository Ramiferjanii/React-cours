import {  useEffect} from 'react'

export default function BasicEffect() {

    useEffect(() => {
        console.log('Basic effect component mounted')

            
    } , [] ) ; // Only re-run the effect if count changes

  return (
    <div>
      <h1> chek  the console to see the message </h1>
    </div>
  )
}
