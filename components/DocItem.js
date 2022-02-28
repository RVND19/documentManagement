function DocItem(data){
    return <div className="grid grid-cols-4 break-words mb-6 pb-2 border-b border-slate-200">
        <div className="px-2">{data.keyId}</div>
        <div className="px-2">{data.name}</div>
        <div className="px-2">{data.email}</div>
        <div className="px-2">{data.address}</div>
    </div>
}

export default DocItem;