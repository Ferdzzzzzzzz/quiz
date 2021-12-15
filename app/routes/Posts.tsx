import {LinksFunction} from 'remix'

const imageLink =
  'https://images.unsplash.com/photo-1609958457872-437881c4b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'

export let links: LinksFunction = () => {
  console.log('===================================')
  console.log('log this when we hover on the button')
  return [
    {
      rel: 'preload',
      href: imageLink,
      as: 'image',
    },
  ]
}

export default function Posts() {
  return (
    <div>
      Hello Posts
      <img
        className="w-96 object-cover md:h-full md:w-48 aspect-[2/3]"
        src={imageLink}
        alt="Man looking at item at a store"
      />
    </div>
  )
}
