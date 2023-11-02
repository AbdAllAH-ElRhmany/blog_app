import './post.css'

function Post() {
  return (
    <div className='post'>
        <img
        className="postImg"
        src="https://images.bridebook.com/weddingsuppliers/florist/csW8eRvmaX/4C11A68F-0917-4DD5-9836-6FA3AB88A261.jpeg?auto=format%2Ccompress&ch=DPR%2CSave-Data&cs=srgb&dpr=1&crop=faces&fit=crop&ar=3%3A2&blur=0&w=1024"
        alt=""
      />
      <div className="postInfo">

      <div className="postCats">
        <span className="postCat">music</span>
        <span className="postCat">life</span>
      </div>
      <span className="postTitle">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum numquam magnam maxime laborum, rem quis rerum, enim deserunt animi, iste harum! Similique a quos qui dolor, ducimus vero expedita maiores?
      </p>
    </div>
  )
}

export default Post