
function Document({data}){
    const docs=data.documents;
    return <div className="flex flex-col">{docs[0].title}</div>
}

export function getStaticProps(){
    return {
        props: {
            data:{
                documents: [{
                    title: "document contoh satu"
                }]
            }
        }
    }
}
export default Document
