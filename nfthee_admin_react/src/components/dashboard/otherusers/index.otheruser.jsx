import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumb from '../../common/breadcrumb.component';
import { Container } from 'reactstrap';
import DataTableExtensions from 'react-data-table-component-extensions';
import DataTable from 'react-data-table-component';

export default function Otheruser() {
  return (
    <Fragment>
      <Breadcrumb title='Users Details' parent='view' />
      <Container fluid={true}>
        <DataTableExtensions  >
          <DataTable
            noHeader
            defaultSortField='id'
            defaultSortAsc={false}
            highlightOnHover
            pagination
            striped
            
            // filter={filterDigit}
          />
        </DataTableExtensions>
      </Container>
      {/* <Item/> */}
    </Fragment>
  )
}
