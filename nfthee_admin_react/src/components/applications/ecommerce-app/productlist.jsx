import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb.component'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import DataTable from 'react-data-table-component';
import {productData,productColumns} from '../../../data/e-commerce/productdata'
const Productlist = () => {
    return (
          <Fragment>
          <Breadcrumb title="Product List" parent="Ecommerce"/>
          <Container fluid={true}>
                    <Row>
                        <Col sm="12">
                            <Card>
                                <CardHeader>
                                    <h5>Individual column searching (text inputs) </h5><span>The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns.</span>
                                </CardHeader>
                                <CardBody>
                                    <div className="table-responsive product-table">
                                      <DataTable
                                          noHeader
                                          columns={productColumns}
                                          data={productData}
                                      />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
           </Container>
           </Fragment>
    )

  }

  export default Productlist


