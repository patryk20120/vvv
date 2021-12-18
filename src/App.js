import logo from './logo.svg';
import './App.css';
import MainPanel from './components/MainPanel';
import SecondPanel from './components/SecondPanel';
import React, {Component} from 'react';

let menuArray = [
  {
    name: "Menu 1",
    images: [
      "https://image.shutterstock.com/shutterstock/photos/1870353346/display_1500/stock-photo-luxury-living-room-in-house-with-modern-interior-design-green-velvet-sofa-coffee-table-pouf-1870353346.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1723139395/display_1500/stock-photo-stylish-interior-design-of-living-room-with-modern-mint-sofa-wooden-console-cube-coffee-table-1723139395.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1938465019/display_1500/stock-photo-beautiful-hotel-room-with-comfortable-double-bed-1938465019.jpg"
    ],
    subMenus: [
      {
        name: "Menu 1 Submenu 1"
      },
      {
        name: "Menu 1 Submenu 2"
      },
      {
        name: "Menu 1 Submenu 3"
      }
    ]
  },
  {
    name: "Menu 2",
    images: [
      "https://image.shutterstock.com/shutterstock/photos/1938465019/display_1500/stock-photo-beautiful-hotel-room-with-comfortable-double-bed-1938465019.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1870353346/display_1500/stock-photo-luxury-living-room-in-house-with-modern-interior-design-green-velvet-sofa-coffee-table-pouf-1870353346.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1723139395/display_1500/stock-photo-stylish-interior-design-of-living-room-with-modern-mint-sofa-wooden-console-cube-coffee-table-1723139395.jpg"
    ],
    subMenus: [
      {
        name: "Menu 2 Submenu 1"
      },
      {
        name: "Menu 2 Submenu 2"
      },
      {
        name: "Menu 2 Submenu 3"
      }
    ]
  },
  {
    name: "Menu 3",
    images: [
      "https://image.shutterstock.com/shutterstock/photos/1723139395/display_1500/stock-photo-stylish-interior-design-of-living-room-with-modern-mint-sofa-wooden-console-cube-coffee-table-1723139395.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1938465019/display_1500/stock-photo-beautiful-hotel-room-with-comfortable-double-bed-1938465019.jpg",
      "https://image.shutterstock.com/shutterstock/photos/1870353346/display_1500/stock-photo-luxury-living-room-in-house-with-modern-interior-design-green-velvet-sofa-coffee-table-pouf-1870353346.jpg"
    ],
    subMenus: [
      {
        name: "1Menu 3  1"
      },
      {
        name: "2Menu 3 c 2"
      },
      {
        name: "3Menu 3 v 3"
      },
      {
        name: "4Menu 3 Submenu 3"
      },
      {
        name: "5Menu 3"
      },
      {
        name: "6Menu 3"
      },
      {
        name: "7Menu enu 3"
      },
      {
        name: "8Menu 3"
      },
      {
        name: "9Menu 3 Submenu 3"
      },
      {
        name: "10Menu 3 Submenu 3"
      },
      {
        name: "11Menu 3 Submenu 3"
      },
      {
        name: "12Menu 3 Submenu 3"
      },
      {
        name: "13Menu 3 a 3"
      },
      {
        name: "14Menu 3 b 3"
      },
      {
        name: "15Menu 3"
      },
      {
        name: "16Men 3"
      },
      {
        name: "17Menu 3"
      }
    ],
    image: "image"
  },
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {currentMenu: menuArray[0]};
  }

  render(){
    return (
      <>
      <div className="barTop"></div>
      <div className="menuHolder">
      <MainPanel menu={menuArray} currentMenu={this.state.currentMenu} onClick={this.mouseClick} />
      <SecondPanel currentMenu={this.state.currentMenu}/>
      </div>
      </>
    );
  };

  mouseClick = (singleMenu) => {
    //console.log("Mouse click");
    //console.log(singleMenu);
    this.setState({currentMenu: singleMenu});
  }
}

export default App;
