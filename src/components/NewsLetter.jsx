import React from 'react'

const NewsLetter = () => {
  return (
    <section className="news__letter">
      <div className="container">
        <h3 className='news__letter-heading'>Subscribe for more updates</h3>
        <form>
          <div className="news__letter-input">
            <input type="text" placeholder='Email' />
            <button>Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NewsLetter