import { AppData   } from './Data/AppData';
import { URLReader } from './Libs/URLReader';
import { AppConnection } from './Connection/AppConnection';
import Actions from './Actions/Actions';
declare const require: any;
const isMobile = require('./Libs/isMobile.min.js');

export class AppMain {
  public data         : AppData;
  public params       : URLReader;
  public conn!        : any;
  public actions!     : Actions;
  public onAction: (params:any) => void;

  public managerLoaded: boolean = false;
  public configsLoaded: boolean = false;

  constructor(onAction: (params:any) => void) {
    this.onAction = onAction;
    this.data   = new AppData();
    this.params = new URLReader();

    window.addEventListener('resize', this.resize.bind(this));
    setTimeout(() => {
      this.data.setProperties(this.params.getParams());
      this.conn    = {};
      // this.conn    = new AppConnection(this.data.dataObject, isMobile, onAction);
      
      this.actions = new Actions(this.data.dataObject, this.conn.senderObject);
      this.resize();
    }, 1000);
    window.ondeviceorientation = (screen: any) => {
      console.warn(screen);
    };
      screen.orientation.onchange = (screen: any) => {
        alert(screen.orientation);
      };
  }

  public checkLoaded(): void {
    this.data.dataObject.lobbyLoaded = true;
    if(this.managerLoaded == true && this.configsLoaded == true)
    {
      this.data.dataObject.lobbyLoaded = ( this.managerLoaded === true && this.configsLoaded === true );
    }
  }

  private resize()
  {
    // if (this.mobile.any) {
      
    //   var targetelement: any = document.getElementsByTagName('body')[0];
    
      // if (document.fullscreenElement) {
      //   document.exitFullscreen();
      // } else {
      //   if ( document.documentElement.requestFullscreen) {
      //     document.documentElement.requestFullscreen();
      //   }
      // }
    // }
    
    // setTimeout(()=>
    // {
      // var w = window.innerWidth;
      // var h = window.innerHeight;

      // this.data.dataObject.availableSize = {x         :w,
      //                                       y         :h,
      //                                       type      :this.mobile.any    == true || this.data.dataObject.availableSize.x <= 1000 ? (window.innerHeight>window.innerWidth+100) ? 'portrait'        : 'landscape' : '',
      //                                       typeDetail:this.mobile.phone  == true || this.data.dataObject.availableSize.x <= 1000 ? (window.innerHeight>window.innerWidth+100) ? 'portrait_phone'  : 'landscape_phone'  :
      //                                                  this.mobile.tablet == true || this.data.dataObject.availableSize.x <= 1000 ? (window.innerHeight>window.innerWidth+100) ? 'portrait_tablet' : 'landscape_tablet' : '',
      //                                       mobile    :this.mobile.any    == true || this.data.dataObject.availableSize.x <= 1000 ? true : false,
      //                                       device    :this.mobile.any    == true};
                                                // this.data.dataObject.isMobile      = this.mobile;
      //                                       this.data.dataObject.isDevice      = this.mobile.any == true;
      window.scrollTo(0,0);
    // },1);
  }

  public doAction(obj: any): void {
    if (this.actions) {
      this.actions.onAction(obj.action, obj.data);
    }
  }

  public get mobile(): any {
    return isMobile;
  }

  public get dataObject(): any {
    return this.data.dataObject;
  }
}
