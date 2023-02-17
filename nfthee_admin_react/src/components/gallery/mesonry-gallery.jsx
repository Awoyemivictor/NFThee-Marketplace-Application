import React, { Fragment } from 'react'
import Breadcrumb from '../common/breadcrumb.component'
import Masonry from 'react-masonry-css';
import {data} from '../../data/galleryData/Images';
import {Container,Row,Col,Card,CardHeader,CardBody,Media} from 'reactstrap'

const MesonryGallery = () => {
    return (
        <Fragment>
            <Breadcrumb title="Masonry Gallery" parent="Gallery" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Masonry Gallery</h5>
                            </CardHeader>
                            <CardBody className="photoswipe-pb-responsive">
                                <Masonry
                                    breakpointCols={4}
                                    className="my-gallery row grid gallery"
                                    columnClassName="col-md-3 col-6 grid-item">
                                    {data.map((element, index) =>
                                        <div key={index} ><Media src={element.src} style={{ width: '100%' }} alt="" /></div>
                                    )}
                                </Masonry>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
}

export default MesonryGallery;