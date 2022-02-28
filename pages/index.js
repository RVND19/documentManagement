import { useState } from "react";
import AlertModal from "../components/AlertModal";
import DocList from "../components/DocList";

let error=null
function HomePage({data}){
  const [show, setShow] = useState(true);
    const  handleShow = () => {
      console.log("print close");
      setShow(false)};

  if(data==null){
    return <div className="w-screen h-screen"><AlertModal show={show} closemodal={handleShow}></AlertModal>
          <h1>Tesss</h1>
    </div>
  }
  return <div className="grid place-items-center"><DocList documents={data} ></DocList></div>
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let data=null
  try{
    const res = await fetch('http://localhost:8060/users');
    data = await res.json();
    
  }catch{
    
  }
  return {
    props: {
      data,
    },
  };
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  
}

export default HomePage;