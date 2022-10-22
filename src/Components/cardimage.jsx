import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';



export default function imagecard() {
    return (
    <div style={{backgroundColor:'lightgrey'}}>
            <h1 style={{ marginLeft:'450px',marginTop:'50px',marginBottom:'50px'}}>ADVICE ON HOW TO MAKE WISE INVESTMENTS</h1>
            <h3 style={{textAlign:'center',padding:'20px',paddingBottom:'40px'}}>If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</h3>

        <div className='row' >

            <div className='col-md-4 '>
                <Card style={{ width: '450px',marginLeft:'70px',backgroundColor:'white',marginBottom:'30px'}}>
                    <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg" style={{ width: '450px',height:'350px',padding:'20px'}}/>
                    <Card.Body >
                        <Card.Title style={{paddingLeft:'55px',fontSize:'36px',color:'orangered'}}>Assets of investors</Card.Title>
                        <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                        All operations of the company's projects are maintained at the expense of assets of investors.
                        </Card.Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:180}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                        
                    </Card.Body>
                </Card>
            </div>

 

            <div className='col-md-4 '>
                <Card style={{ width: '450px',height:'600px',marginLeft:'30px',backgroundColor:'white',marginBottom:'30px'}}>
                    <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice2.jpg" style={{ width: '450px',height:'350px',padding:'20px'}}/>
                    <Card.Body >
                        <Card.Title style={{paddingLeft:'125px',fontSize:'36px',color:'orangered'}}>Directions</Card.Title>
                        <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                        The team works in two directions: portfolio investment, where is the lowest risk, and investments in startups.
                        </Card.Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:190}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                        
                    </Card.Body>
                </Card>
            </div>

            <div className='col-md-4 '>
                <Card style={{ width: '450px',marginRight:'70px',backgroundColor:'white',marginBottom:'30px'}}>
                    <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice3.jpg" style={{ width: '450px',height:'350px',padding:'20px'}}/>
                    <Card.Body >
                        <Card.Title style={{paddingLeft:'135px',fontSize:'36px',color:'orangered'}}>Support</Card.Title>
                        <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                        If you have a question, you can always call our hotline, and operators will be happy to help you!
                        </Card.Text>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16" style={{marginLeft:180}}>
                             <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                        </svg>
                        
                    </Card.Body>
                </Card>
            </div>

            

            
        </div>
    </div>
       
        
        
        
        
        
    );
}