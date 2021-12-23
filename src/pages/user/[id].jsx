import { useParams } from "react-router-dom"
export default function User() {
  const { id } = useParams()
  return (
    <div>
      <h2>User id: {id}</h2>
    </div>
  )
}
