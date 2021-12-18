import ImagePanel from './ImagePanel';
import Button from './Button';

function SecondPanel({currentMenu}) {
    if(currentMenu.subMenus){
        return (
            <div className="secondPanel">
                <div className="menuColumn">
                    <div className="menuContent">
                        {currentMenu.subMenus.map(singleSubMenu => (
                            <div key={singleSubMenu.name}>
                                <a href="#">{singleSubMenu.name}</a>
                            </div>
                        ))}
                    </div>
                    <Button text="zobacz więcej typów mebli" link="#" />
                </div>
                <ImagePanel image={currentMenu.images[0]}/>
            </div>
        );
    }else{
        return (<></>);
    }
}

export default SecondPanel;