<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardHeader>
        <strong>Data Produk</strong>
      </CCardHeader>
      <CCardBody>
        <CButton
          component="a"
          color="primary"
          href="/#/data_customer/tambah"
          role="button"
          >TAMBAH</CButton
        >
        <CTable striped>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Class</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
              <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
              <CTableDataCell>@mdo</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">2</CTableHeaderCell>
              <CTableDataCell>Jacob</CTableDataCell>
              <CTableDataCell>Thornton</CTableDataCell>
              <CTableDataCell>@fat</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
            <CTableRow>
              <CTableHeaderCell scope="row">3</CTableHeaderCell>
              <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
              <CTableDataCell>@twitter</CTableDataCell>
              <CTableDataCell
                ><CButton
                  component="a"
                  color="info"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >View</CButton
                >
                <CButton
                  component="a"
                  color="warning"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Edit</CButton
                >
                <CButton
                  component="a"
                  color="danger"
                  href="#"
                  role="button"
                  shape="rounded-pill"
                  >Delate</CButton
                ></CTableDataCell
              >
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCardBody>
    </CCard>
  </CCol>
</template>
