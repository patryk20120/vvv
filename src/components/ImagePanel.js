function ImagePanel({image}){
    if(image){
        return (
            <div className="imageColumn" style={{backgroundImage: "url("+image+")"}}>
        
            </div>
        );
    }else{
        return(<></>);
    }
}

export default ImagePanel;