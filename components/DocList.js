import DocItem from "./DocItem";
function DocList(props){
    console.log(props);
    
    return <div className="p-10 mt-10 min-w-[700px] max-w-[1200px] md:px-10 bg-white md:w-11/12 md:rounded-lg md:shadow-lg">
        <div className="grid grid-cols-4 my-2 font-bold pb-6 mb-6 border-b border-slate-200">
            <div className="">User ID</div>
            <div className="">Name</div>
            <div className="">Email</div>
            <div className="">Address</div>
        </div>
        {props.documents.map((doc) => (
            <DocItem
                className=""
                keyId={doc.id} 
                name={doc.name}
                email={doc.email}
                address={doc.address}
                 />
        ))}
    </div>
}

export default DocList;