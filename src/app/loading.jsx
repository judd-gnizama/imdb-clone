import Image from 'next/image'

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        src="loading.svg"
        className='h-52'
        width={500}
        height={500}
        alt="loading..."
      ></Image>
      {/* <img className="h-52" src="loading.svg" alt="loading..." /> */}
    </div>
  )
}
