import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function iconcard() {
    return (
        <section> <h1 style={{ marginLeft:'500px',marginTop:'50px',marginBottom:'50px'}}>OUR FOCUS IS OUR CLIENTS' SUCCESS</h1>

            <div className='row' >

                <div className='col-md-3 '  style={{ paddingLeft: '50px',paddingBottom:'50px' }}>
                    <Card style={{ width: '18rem',border:'0'}}>
                        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus1.png" style={{ width: '100px',height:'100px',marginTop:'50px',marginLeft:'85px',marginBottom:'25px'}}/>
                        <Card.Body >
                            <Card.Title style={{paddingLeft:'46px'}}>PRIVATE BANKING</Card.Title>
                            <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                            This is a banking service for wealthy individuals, which involves operations with client's money, preserving and increasing his state.
                            </Card.Text>
                            <Button style={{ backgroundColor: 'transparent',color:'black',marginLeft:'60px' }}>Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3 '  style={{ paddingLeft: '50px',paddingBottom:'50px' }}>
                    <Card style={{ width: '18rem',border:'0'}}>
                        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus2.png" style={{ width: '100px',height:'100px',marginTop:'50px',marginLeft:'85px',marginBottom:'25px'}}/>
                        <Card.Body >
                            <Card.Title style={{paddingLeft:'46px'}}>TIME SAVING TIPS</Card.Title>
                            <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                            If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income.
                            </Card.Text>
                            <Button style={{ backgroundColor: 'transparent',color:'black',marginLeft:'60px' }}>Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3 '  style={{ paddingLeft: '50px',paddingBottom:'50px' }}>
                    <Card style={{ width: '18rem',border:'0'}}>
                        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus3.png" style={{ width: '100px',height:'100px',marginTop:'50px',marginLeft:'85px',marginBottom:'25px'}}/>
                        <Card.Body >
                            <Card.Title style={{paddingLeft:'46px'}}>BUDGETING TIPS</Card.Title>
                            <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                            Investment analysis and appraisal of investment projects (evaluation of ROI analysis of investment attractiveness of assets and branches)
                            </Card.Text>
                            <Button style={{ backgroundColor: 'transparent',color:'black',marginLeft:'60px' }}>Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className='col-md-3 '  style={{ paddingLeft: '50px',paddingBottom:'50px' }}>
                    <Card style={{ width: '18rem',border:'0'}}>
                        <Card.Img variant="top" src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-our-focus4.png" style={{ width: '100px',height:'100px',marginTop:'50px',marginLeft:'85px',marginBottom:'25px'}}/>
                        <Card.Body >
                            <Card.Title style={{paddingLeft:'30px'}}>MONEY SAVING IDEAS</Card.Title>
                            <Card.Text style={{textAlign:'center',fontSize:'18px',margin:'12px',paddingBottom:'8px'}} >
                            Business planning: drafting and elaboration of business plans and investment memorandums, technical-economic justification, financial modeling.
                            </Card.Text>
                            <Button style={{ backgroundColor: 'transparent',color:'black',marginLeft:'60px' }}>Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

                
                


  
    
  

</div></section>
        
        
        
        
    );
}