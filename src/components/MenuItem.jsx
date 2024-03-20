import Link from "next/link"

const MenuItem = ({ title, address, Icon}) => {
  return (
    <Link href={ address }>
        <Icon className="text-2xl"/>
        <p className="">{title}</p>
    </Link>
  )
}

export default MenuItem
