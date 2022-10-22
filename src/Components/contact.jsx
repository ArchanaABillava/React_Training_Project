import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function imagecard() {
    return (
        <div className='row' style={{backgroundColor:'grey'}}>

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16" style={{marginTop:'80px',paddingLeft:'20px'}}>
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
</svg>
                    {/* <img
                    className="d-block w-100"
                    src="https://e7.pngegg.com/pngimages/928/445/png-clipart-red-location-icon-renter-needs-computer-icons-gps-navigation-systems-global-positioning-system-journey-planner-location-text-logo.png"
                    alt="Image One" style={{height:'100px',width:'50px',marginTop:'80px',marginBottom:'80px'}} />
                     */}
                    </div>
                    <div className='col-md-8' style={{marginTop:'80px',marginBottom:'80px',fontSize:'24px'}}>NEW YORK 9870 ST VINCENT GLASGOW</div>
                </div>
            </div>

            <div className='col-md-4'></div>
            <div className='col-md-4'></div>
        </div>
    );
}