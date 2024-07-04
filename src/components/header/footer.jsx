// import Card from 'react-bootstrap/card';
import Emblem from '../../assets/Emblem.jpg';
import Row from 'react-bootstrap/Row';
import Court from '../../assets/court.jpg';
import cc from '../../assets/cc.jpg';
import citycourt from '../../assets/city.jpg';
import './footer.css';
import { Button } from 'react-bootstrap';
import s3waas from '../../assets/swaas.jpg';
import digital from '../../assets/Digital.jpg';
import department from '../../assets/department.jpg';
import ecommittee from '../../assets/ecommitee.jpg';
import ic from '../../assets/ic.jpg';
import nic from '../../assets/nic.jpg';
import { Footer as FlowbiteFooter } from 'flowbite-react';

const Footer = () => {
    return (
        <FlowbiteFooter container>
            <div className='di'> 
                <div>
                    <Row className='row'>
                        <h2 className='h-2'>Photo Gallery</h2>
                        <div className="col-3">
                            <img src={Emblem} alt="" className='img-1' />
                        </div>

                        <div className="col-3">
                            <img src={Court} alt="" className='img-1' />
                        </div>

                        <div className="col-3">
                            <img src={cc} alt="" className='img-1' />
                        </div>

                        <div className="col-3">
                            <img src={citycourt} alt="" className='img-1' />
                        </div>
                    </Row>
                    <Row>
                        <Button className='btn'>...View More...</Button>
                    </Row>
                </div>

                <div>
                    <Row>
                        <div className='div-foot'>
                            <h6 className='h4-foot'>Content Owned by CITY CIVIL COURTS HYDERABAD AND SECUNDERABAD</h6>
                            <p className='p-foot'>
                                Developed and hosted by National Informatics Centre, <br />
                                Ministry of Electronics & Information Technology, Government of India
                            </p>
                            <div className='row-foot'>
                                <img className='img-foot' src={s3waas} alt='' />
                                <img className='img-foot' src={digital} alt='' />
                                <img className='img-foot' src={department} alt='' />
                                <img className='img-foot' src={ecommittee} alt='' />
                                <img className='img-foot' src={ic} alt='' />
                                <img className='img-foot' src={nic} alt='' />
                            </div>
                        </div>
                    </Row>
                </div>
            </div>
        </FlowbiteFooter>
    );
}

export default Footer;
