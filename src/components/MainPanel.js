import Button from './Button';

function MainPanel({menu, currentMenu, onClick}) {   
    return (
       <div className="mainPanel">
            {menu.map(singleMenu => (
                <div key={singleMenu.name}>
                    <a href="#" className={`${currentMenu.name == singleMenu.name ? "active" : ""}`} onClick={() => {onClick(singleMenu);}}>
                    {singleMenu.name}
                    </a>
                </div>
            ))}
            <Button text="o meblach" link="#" />
       </div>
    );
}

export default MainPanel;