import { General } from '../types/types'

function GeneralPreview({name, email, phone, description}: General) {
  return (
    <section className='a4Page'>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{description}</p>
    </section>
  )
}

export default GeneralPreview;
